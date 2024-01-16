export type UploadResumeStoreData = {
  isDialogOpen: boolean
}

export type UploadResumeStoreActions = {
  openUploadResumeDialog: () => void
  hideUploadResumeDialog: () => void
  changeDialogOpen: (isDialogOpen: boolean) => void
}

export type UploadResumeStoreValues = UploadResumeStoreData & UploadResumeStoreActions
