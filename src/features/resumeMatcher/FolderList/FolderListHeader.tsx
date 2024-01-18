import { Input } from '@components/Input'
import { RiFoldersLine } from 'react-icons/ri'
import { Header, Heading, SearchContainer } from './FolderList.styled'
import { ChangeEvent } from 'react'

type FolderListHeaderProps = {
  searchValue: string
  changeSearchValue: (value: string) => void
}

export function FolderListHeader({ searchValue, changeSearchValue }: FolderListHeaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSearchValue(e.target.value)
  }

  return (
    <Header>
      <Heading>
        <RiFoldersLine size={22} />
        Thư mục
      </Heading>
      <SearchContainer>
        <Input placeholder='Tìm kiếm thư mục' value={searchValue} onChange={handleChange} />
      </SearchContainer>
    </Header>
  )
}
