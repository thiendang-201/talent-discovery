import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { useDebounce } from '@uidotdev/usehooks'
import { FolderListHeader } from './FolderListHeader'
import { useState } from 'react'
import { useFolderList } from '@/api/folder'

export function FolderList({ className }: FolderListProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { data: folderList = [] } = useFolderList({ search_value: debouncedSearchValue })

  return (
    <Container className={className}>
      <FolderListHeader searchValue={searchValue} changeSearchValue={setSearchValue} />
      <div>
        {folderList.map(folder => (
          <FolderItem
            key={folder.folder_id}
            title={folder.folder_name}
            createdDate={folder.created_at}
            isActive={false}
          />
        ))}
      </div>
    </Container>
  )
}
