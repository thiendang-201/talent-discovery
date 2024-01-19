import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { useDebounce } from '@uidotdev/usehooks'
import { FolderListHeader } from './FolderListHeader'
import { useEffect, useState } from 'react'
import { useFolderList } from '@/api/folder'
import { ScrollArea } from '@components/ScrollView'
import { useInView } from 'react-intersection-observer'

export function FolderList({ className }: FolderListProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { ref: lastElmRef, inView } = useInView()
  const {
    data: folderList = [],
    isFetchingNextPage,
    fetchNextPage,
  } = useFolderList({ search_value: debouncedSearchValue })

  useEffect(() => {
    console.log(inView, isFetchingNextPage)

    inView && !isFetchingNextPage && fetchNextPage()
  }, [fetchNextPage, inView, isFetchingNextPage])

  return (
    <Container className={className}>
      <FolderListHeader searchValue={searchValue} changeSearchValue={setSearchValue} />
      <ScrollArea>
        {folderList.map((folder, index) => (
          <FolderItem
            ref={index === folderList.length - 1 ? lastElmRef : null}
            {...folder}
            key={folder.folder_id}
          />
        ))}
      </ScrollArea>
    </Container>
  )
}
