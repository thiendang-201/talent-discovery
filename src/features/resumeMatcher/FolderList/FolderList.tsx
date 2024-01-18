import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { useDebounce } from '@uidotdev/usehooks'
import { FolderListHeader } from './FolderListHeader'
import { useState } from 'react'
import { useFolderList } from '@/api/folder'
import { ScrollArea } from '@components/ScrollView'

export function FolderList({ className }: FolderListProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { data: folderList = [] } = useFolderList({ search_value: debouncedSearchValue })

  return (
    <Container className={className}>
      <FolderListHeader searchValue={searchValue} changeSearchValue={setSearchValue} />
      <ScrollArea>
        {folderList.map(folder => (
          <FolderItem {...folder} key={folder.folder_id} />
        ))}
      </ScrollArea>
    </Container>
  )
}
