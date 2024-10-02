export type UploadState = {
  status: 'pending' | 'uploading' | 'processing' | 'success' | 'error'
  message: string
}

export type UploadFileData = {
  id: string
  folderId: string
  file: File
}

export type UploadStateRecord = {
  fileId: string
  totalBytes: number
  uploadedBytes: number
  states: UploadState[]
}

export type UploadResumeStoreData = {
  isDialogOpen: boolean
  files: UploadFileData[]
  pendingList: UploadFileData[]
  uploadStateMap: Record<string, UploadStateRecord>
  next: UploadFileData[]
  isUploading: boolean
}

export type UploadResumeStoreActions = {
  openUploadResumeDialog: () => void
  hideUploadResumeDialog: () => void
  changeDialogOpen: (isDialogOpen: boolean) => void

  addFiles: (files: File[], folderId: string) => void
  updatePendingList: (files: UploadFileData[]) => void
  changeNextUploadFile: (file: UploadFileData[]) => void
  updateUploadProgress: (fileId: string, uploadedBytes: number) => void
  updateUploadStatus: (fileId: string, status: UploadState) => void
  changeIsUploading: (isUploading: boolean) => void

  resetResumesUpload: () => void
}

export type UploadResumeStoreValues = UploadResumeStoreData & UploadResumeStoreActions
