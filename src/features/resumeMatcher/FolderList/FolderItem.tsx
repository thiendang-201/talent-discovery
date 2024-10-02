import { RiFolderUserLine } from 'react-icons/ri'
import { format } from 'date-fns'
import {
  Container,
  Content,
  ContentContainer,
  CreatedDate,
  Icon,
  MenuContainer,
  Title,
} from './FolderItem.styled'
import { useNavigate } from 'react-router-dom'
import { Folder } from '@/api/folder'
import { FolderMenu } from './FolderMenu'
import { forwardRef } from 'react'

type FolderItemProps = {
  isActive: boolean
} & Folder

export const FolderItem = forwardRef<HTMLDivElement, FolderItemProps>(
  ({ folder_name, created_at, folder_id, isActive }, ref) => {
    const navigate = useNavigate()
    const formattedCreatedDate = format(created_at, 'dd/MM/yyyy')

    const navigateToFolderResumesPage = () => {
      navigate(`/resume-matcher/${folder_id}`, { state: { folder_name } })
    }

    return (
      <Container ref={ref}>
        <ContentContainer isActive={isActive} onClick={navigateToFolderResumesPage}>
          <Icon>
            <RiFolderUserLine size={18} />
          </Icon>
          <Content>
            <Title>{folder_name}</Title>
            <CreatedDate>{formattedCreatedDate}</CreatedDate>
          </Content>
        </ContentContainer>
        <MenuContainer>
          <FolderMenu folder_id={folder_id} folder_name={folder_name} />
        </MenuContainer>
      </Container>
    )
  }
)
