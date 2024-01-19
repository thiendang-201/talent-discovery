import { RiFolderUserLine } from 'react-icons/ri'
import { format } from 'date-fns'
import { Container, Content, CreatedDate, Icon, MenuContainer, Title } from './FolderItem.styled'
import { useNavigate, useParams } from 'react-router-dom'
import { Folder } from '@/api/folder'
import { FolderMenu } from './FolderMenu'
import { forwardRef } from 'react'

export const FolderItem = forwardRef<HTMLDivElement, Folder>(
  ({ folder_name, created_at, folder_id }, ref) => {
    const navigate = useNavigate()
    const formattedCreatedDate = format(created_at, 'dd/MM/yyyy')
    const { folderId: selectedFolderId } = useParams()

    const navigateToFolderResumesPage = () => {
      navigate(`/resume-matcher/${folder_id}`)
    }

    return (
      <Container
        ref={ref}
        isActive={folder_id === selectedFolderId}
        onClick={navigateToFolderResumesPage}
      >
        <Icon>
          <RiFolderUserLine size={18} />
        </Icon>
        <Content>
          <Title>{folder_name}</Title>
          <CreatedDate>{formattedCreatedDate}</CreatedDate>
        </Content>
        <MenuContainer>
          <FolderMenu folder_id={folder_id} folder_name={folder_name} />
        </MenuContainer>
      </Container>
    )
  }
)
