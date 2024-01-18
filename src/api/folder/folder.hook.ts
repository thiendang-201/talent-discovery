import { QUERY_KEYS } from '@/constants'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getFolderList } from './folder.api'
import { GetFolderPayload } from './folder.type'

export function useFolderList({ search_value }: GetFolderPayload) {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QUERY_KEYS.FOLDER_LIST, search_value],
    queryFn: ({ pageParam }) =>
      getFolderList({ search_value: search_value, size: 20, page: pageParam }),
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) return lastPage.page + 1
    },
    select: data => {
      return data.pages.flatMap(page => page.results)
    },
  })
}
