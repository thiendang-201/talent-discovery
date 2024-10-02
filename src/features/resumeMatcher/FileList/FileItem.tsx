import { useRef } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import {
  Body,
  BodyLeft,
  BodyRight,
  Container,
  Header,
  JobTitle,
  Name,
  StyledPreviewCV,
} from './FileItem.styled'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { IconButton } from '@components/Button'
import { useVisible } from '@/hooks'
import { RemoveDialog } from '@components/RemoveDialog'
import { useRemoveResume } from '@api/resume'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'

export function FileItem({ candidateName, jobTitle, thumbnail, id }: FileItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const [isVisible, setVisible] = useVisible()
  const { mutate: removeResume, isPending } = useRemoveResume()
  const queryClient = useQueryClient()

  const onNavigateToDetailPage = () => navigate(`/resume/${id}`)

  const confirmRemoveResume = () => {
    removeResume(id)
    setVisible.off()
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SEARCH_RESUME] })
  }

  return (
    <Container ref={containerRef}>
      <Header onClick={onNavigateToDetailPage}>
        <PreviewCV src={thumbnail} />
      </Header>
      <Body>
        <BodyLeft>
          <Name>{candidateName}</Name>
          <JobTitle>{jobTitle}</JobTitle>
        </BodyLeft>
        <BodyRight>
          <IconButton variant='soft' color='red' onClick={setVisible.on}>
            <FaTrashAlt size={14} />
          </IconButton>
        </BodyRight>
      </Body>
      <RemoveDialog
        isPending={isPending}
        isVisible={isVisible}
        changeVisible={setVisible.changeVisible}
        heading={`Xóa Hồ sơ của ${candidateName}`}
        removeMsg={`Toàn bộ thông tin của hồ sơ này sẽ bị xóa khỏi hệ thống!`}
        onConfirm={confirmRemoveResume}
      />
    </Container>
  )
}

const PreviewCV = ({ src }: PreviewCVProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return <StyledPreviewCV ref={ref} src={inView ? src : ''} />
}

export type FileItemProps = {
  id: string
  candidateName: string
  jobTitle: string
  thumbnail: string
}

export type PreviewCVProps = {
  src: string
}
