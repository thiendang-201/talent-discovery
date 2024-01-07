import { RiFoldersLine } from 'react-icons/ri'
import { Container, Header, Heading, SearchContainer } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { Input } from '@components/Input'
import { FolderItem } from './FolderItem'

export function FolderList({ className }: FolderListProps) {
  return (
    <Container className={className}>
      <Header>
        <Heading>
          <RiFoldersLine size={22} />
          Thư mục
        </Heading>
        <SearchContainer>
          <Input placeholder='Tìm kiếm thư mục' />
        </SearchContainer>
      </Header>
      <div>
        <FolderItem title='Tuyển dụng FE 09/2023' isActive={false} />
        <FolderItem title='Tuyển dụng FE 08/2023' isActive />
      </div>
    </Container>
  )
}
