import { FILTER_CATEGORIES } from '@/constants'
import { APIError } from '@api/common.type'
import { UseMutationOptions } from '@tanstack/react-query'
import { AxiosProgressEvent } from 'axios'

export type UploadResumePayload = {
  id: string
  file: File
  folder_id: string
  onUploadProgress: UploadProgessFn
}

export type UploadProgessFn = (progessEvt: AxiosProgressEvent) => void

export type UploadResumeOptions = UseMutationOptions<void, APIError, UploadResumePayload, unknown>

export type OnUploadSuccessFn = Exclude<UploadResumeOptions['onSuccess'], undefined>

export type OnUploadErrorFn = Exclude<UploadResumeOptions['onError'], undefined>

export type GetKeywordPayload = {
  keyword_type: FILTER_CATEGORIES
  search_value: string
}

export type KeywordData = {
  keyword_id: string
  keyword_value: string
}

export type KeywordResponse = KeywordData[]

export type ResumeData = {
  resume_id: string
  full_name: string
  job_title: string
  resume_thumbnail_url: string
}

export type SearchOption = {
  value: string
  required: boolean
}

export type SearchResumesPayload = {
  folder_id: string
  job_title: string
  awards: SearchOption[]
  certificates: SearchOption[]
  educations: SearchOption[]
  languages: SearchOption[]
  skills: SearchOption[]
}
