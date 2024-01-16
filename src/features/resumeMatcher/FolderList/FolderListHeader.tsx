import { Input } from '@components/Input'
import { RiFoldersLine } from 'react-icons/ri'
import { Header, Heading, SearchContainer } from './FolderList.styled'

export function FolderListHeader() {
  return (
    <Header>
      <Heading>
        <RiFoldersLine size={22} />
        Thư mục
      </Heading>
      <SearchContainer>
        <Input placeholder='Tìm kiếm thư mục' />
      </SearchContainer>
    </Header>
  )
}
