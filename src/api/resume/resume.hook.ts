import { MUTATION_KEYS, QUERY_KEYS } from '@/constants'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getKeywords, getResume, removeResume, searchResumes, uploadResume } from './resume.api'
import { APIError } from '../common.type'
import {
  GetKeywordPayload,
  SearchResumesPayload,
  UploadResumeOptions,
  UploadResumePayload,
} from './resume.type'

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

export function useSearchResume(payload: SearchResumesPayload) {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH_RESUME, payload],
    queryFn: () => searchResumes(payload),
  })
}

export function useResume(resume_id: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.RESUME_DETAIL, resume_id],
    queryFn: () => getResume(resume_id),
  })
}

export function useRemoveResume() {
  return useMutation({
    mutationKey: [MUTATION_KEYS.REMOVE_RESUME],
    mutationFn: removeResume,
  })
}
