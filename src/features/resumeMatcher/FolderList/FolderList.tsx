import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { FolderListHeader } from './FolderListHeader'

export function FolderList({ className }: FolderListProps) {
  return (
    <Container className={className}>
      <FolderListHeader />
      <div>
        <FolderItem title='Tuyển dụng FE 09/2023' isActive={false} />
        <FolderItem title='Tuyển dụng FE 08/2023' isActive />
      </div>
    </Container>
  )
}
