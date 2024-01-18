import { RiFolderUserLine } from 'react-icons/ri'
import { format } from 'date-fns'
import { Container, Content, CreatedDate, Icon, Title } from './FolderItem.styled'
import { useNavigate, useParams } from 'react-router-dom'
import { Folder } from '@/api/folder'

export function FolderItem({ folder_name, created_at, folder_id }: Folder) {
  const navigate = useNavigate()
  const formattedCreatedDate = format(created_at, 'dd/MM/yyyy')
  const { folderId } = useParams()

  const navigateToFolderResumesPage = () => {
    navigate(`/resume-matcher/${folder_id}`)
  }

  return (
    <Container isActive={folder_id === folderId} onClick={navigateToFolderResumesPage}>
      <Icon>
        <RiFolderUserLine size={18} />
      </Icon>
      <Content>
        <Title>{folder_name}</Title>
        <CreatedDate>{formattedCreatedDate}</CreatedDate>
      </Content>
    </Container>
  )
}
