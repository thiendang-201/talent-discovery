import { useRef } from 'react'
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
import { FileMenu } from './FileMenu'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

export function FileItem({ candidateName, jobTitle, thumbnail, id }: FileItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const onMenuOpenChange = () => {
    containerRef.current?.classList.toggle('menu-opened')
  }

  const onNavigateToDetailPage = () => navigate(`/resume/${id}`)

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
          <FileMenu onMenuOpenChange={onMenuOpenChange} />
        </BodyRight>
      </Body>
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
