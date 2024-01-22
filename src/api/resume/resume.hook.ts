import { MUTATION_KEYS, QUERY_KEYS } from '@/constants'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getKeywords, uploadResume } from './resume.api'
import { APIError } from '../common.type'
import { GetKeywordPayload, UploadResumeOptions, UploadResumePayload } from './resume.type'

export function useUploadResume(options?: UploadResumeOptions) {
  return useMutation<void, APIError, UploadResumePayload>({
    ...options,
    mutationKey: [MUTATION_KEYS.UPLOAD_RESUME],
    mutationFn: uploadResume,
  })
}

export function useKeywords(params: GetKeywordPayload) {
  return useQuery({
    queryKey: [QUERY_KEYS.KEYWORD_LIST, params],
    queryFn: () => getKeywords(params),
  })
}
