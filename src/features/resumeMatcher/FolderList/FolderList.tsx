import { Container } from './FolderList.styled'
import { FolderListProps } from './FolderList.type'
import { FolderItem } from './FolderItem'
import { useDebounce } from '@uidotdev/usehooks'
import { FolderListHeader } from './FolderListHeader'
import { useEffect, useState } from 'react'
import { useFolderList } from '@/api/folder'
import { ScrollArea } from '@components/ScrollView'
import { useInView } from 'react-intersection-observer'
import { LoaderWrapper, Loading } from '@components/LoaderWrapper'
import { useParams } from 'react-router-dom'

export function FolderList({ className }: FolderListProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { folderId: selectedFolderId } = useParams()
  const { ref: lastElmRef, inView } = useInView({ threshold: 0.1 })
  const {
    data: folderList = [
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
      { folder_id: '111', folder_name: 'test', created_at: '2024-03-28T13:11:18.959Z' },
    ],
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useFolderList({ search_value: debouncedSearchValue })

  useEffect(() => {
    inView && hasNextPage && !isFetchingNextPage && fetchNextPage()
  }, [fetchNextPage, hasNextPage, inView, isFetchingNextPage])

  return (
    <Container className={className}>
      <FolderListHeader searchValue={searchValue} changeSearchValue={setSearchValue} />
      <ScrollArea>
        <LoaderWrapper isLoading={isLoading} isEmpty={folderList.length === 0}>
          {folderList.map((folder, index) => (
            <FolderItem
              ref={index === folderList.length - 1 ? lastElmRef : null}
              {...folder}
              key={folder.folder_id}
              isActive={folder.folder_id === selectedFolderId}
            />
          ))}
        </LoaderWrapper>
        {isFetchingNextPage && <Loading />}
      </ScrollArea>
    </Container>
  )
}
