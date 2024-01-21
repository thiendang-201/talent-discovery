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
