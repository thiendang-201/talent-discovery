import { MUTATION_KEYS } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { uploadResume } from './resume.api'
import { APIError } from '../common.type'
import { UploadResumeOptions, UploadResumePayload } from './resume.type'

export function useUploadResume(options?: UploadResumeOptions) {
  return useMutation<void, APIError, UploadResumePayload>({
    ...options,
    mutationKey: [MUTATION_KEYS.UPLOAD_RESUME],
    mutationFn: uploadResume,
  })
}
