import { create } from 'zustand'
import { UploadResumeStoreValues, UploadResumeStoreData } from './uploadResumeStores.type.ts'

const initialValues: UploadResumeStoreData = {
  isDialogOpen: false,
}

export const useUploadResumes = create<UploadResumeStoreValues>(set => ({
  ...initialValues,

  openUploadResumeDialog: () => set({ isDialogOpen: true }),
  hideUploadResumeDialog: () => set({ isDialogOpen: false }),
  changeDialogOpen: isDialogOpen => set({ isDialogOpen }),
}))
