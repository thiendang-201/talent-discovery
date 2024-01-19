import { MUTATION_KEYS, QUERY_KEYS } from '@/constants'
import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { createFolder, getFolderList, updateFolder } from './folder.api'
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

export function useCreateFolder() {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_FOLDER],
    mutationFn: createFolder,
  })
}

export function useUpdateFolder() {
  return useMutation({
    mutationKey: [MUTATION_KEYS.UPDATE_FOLDER],
    mutationFn: updateFolder,
  })
}
