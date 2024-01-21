import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { useDebounce } from '@uidotdev/usehooks'
import { FolderListHeader } from './FolderListHeader'
import { useEffect, useMemo, useState } from 'react'
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
    hasNextPage,
  } = useFolderList({ search_value: debouncedSearchValue })

  useEffect(() => {
    inView && hasNextPage && !isFetchingNextPage && fetchNextPage()
  }, [fetchNextPage, hasNextPage, inView, isFetchingNextPage])

  const folderListElm = useMemo(() => {
    return folderList.map((folder, index) => (
      <FolderItem
        ref={index === folderList.length - 1 ? lastElmRef : null}
        {...folder}
        key={folder.folder_id}
      />
    ))
  }, [folderList, lastElmRef])

  return (
    <Container className={className}>
      <FolderListHeader searchValue={searchValue} changeSearchValue={setSearchValue} />
      <ScrollArea>{folderListElm}</ScrollArea>
    </Container>
  )
}
