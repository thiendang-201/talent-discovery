import { create } from 'zustand'
import {
  UploadResumeStoreValues,
  UploadResumeStoreData,
  UploadState,
  UploadStateRecord,
  UploadFileData,
} from './uploadResumeStores.type.ts'
import { immer } from 'zustand/middleware/immer'
import { v4 as uuidv4 } from 'uuid'
import { useCallback, useEffect } from 'react'
import { OnUploadErrorFn, OnUploadSuccessFn, useUploadResume } from '@/api/resume'
import { API_ERROR_TYPES, QUERY_KEYS } from '@/constants'
import { useQueryClient } from '@tanstack/react-query'

const batchSize = 3

const initialValues: UploadResumeStoreData = {
  isUploading: false,
  isDialogOpen: false,
  files: [],
  pendingList: [],
  uploadStateMap: {},
  next: [],
}

export const useUploadResumesStore = create<UploadResumeStoreValues>()(
  immer(set => ({
    ...initialValues,

    openUploadResumeDialog: () => set({ isDialogOpen: true }),
    hideUploadResumeDialog: () => set({ isDialogOpen: false }),
    changeDialogOpen: isDialogOpen => set({ isDialogOpen }),

    addFiles: (files, folderId) => {
      set(state => {
        const uploadFiles: UploadFileData[] = []

        files.forEach(file => {
          const uploadFile: UploadFileData = {
            id: uuidv4(),
            folderId,
            file,
          }

          const initState: UploadState = {
            status: 'pending',
            message: 'Chờ xử lý',
          }

          const uploadState: UploadStateRecord = {
            fileId: uploadFile.id,
            totalBytes: file.size,
            uploadedBytes: 0,
            states: [initState],
          }

          uploadFiles.push(uploadFile)
          state.uploadStateMap[uploadFile.id] = uploadState
        })

        state.files.push(...uploadFiles)
        state.pendingList.push(...uploadFiles)
        state.isUploading = true
      })
    },
    changeNextUploadFile: uploadFiles => {
      set(state => {
        state.next = uploadFiles
      })
    },
    updateUploadProgress: (fileId, uploadedBytes) => {
      set(state => {
        state.uploadStateMap[fileId].uploadedBytes = uploadedBytes
      })
    },
    updateUploadStatus: (fileId, status) => {
      set(state => {
        state.uploadStateMap[fileId].states.push(status)
      })
    },
    updatePendingList: files => {
      set(state => {
        state.pendingList = files
      })
    },
    changeIsUploading: isUploading => {
      set(state => {
        state.isUploading = isUploading
      })
    },

    resetResumesUpload: () => {
      set(initialValues)
    },
  }))
)

export const useUploadResumeQueue = () => {
  const nextList = useUploadResumesStore(state => state.next)
  const isUploading = useUploadResumesStore(state => state.isUploading)
  const files = useUploadResumesStore(state => state.files)
  const pendingList = useUploadResumesStore(state => state.pendingList)
  const addFiles = useUploadResumesStore(state => state.addFiles)
  const changeNextUploadFile = useUploadResumesStore(state => state.changeNextUploadFile)
  const updateUploadProgress = useUploadResumesStore(state => state.updateUploadProgress)
  const updateUploadStatus = useUploadResumesStore(state => state.updateUploadStatus)
  const updatePendingList = useUploadResumesStore(state => state.updatePendingList)
  const changeIsUploading = useUploadResumesStore(state => state.changeIsUploading)
  const queryClient = useQueryClient()
  const { mutateAsync: uploadFile } = useUploadResume({
    onSuccess: (...args) => onUploadSucess(...args),
    onError: (...args) => onUploadError(...args),
  })

  const handleFileUpload = useCallback(
    async (uploadList: UploadFileData[]) => {
      uploadList.map(currentUploadFile => {
        console.log('Processes the next pending file when ready', currentUploadFile.id)
        uploadFile({
          id: currentUploadFile.id,
          file: currentUploadFile.file,
          folder_id: currentUploadFile.folderId,
          onUploadProgress: progessEvt => {
            updateUploadProgress(currentUploadFile.id, progessEvt.loaded)

            if (progessEvt.loaded === progessEvt.total) {
              updateUploadStatus(currentUploadFile.id, {
                status: 'processing',
                message: 'Đang trích xuất thông tin',
              })
            }
          },
        })
      })
    },
    [updateUploadProgress, updateUploadStatus, uploadFile]
  )

  // Sets the next file when its ready
  useEffect(() => {
    const availableSlots = batchSize - nextList.length

    if (!!pendingList.length && availableSlots) {
      const nextUploadFiles = pendingList.slice(0, availableSlots)
      const newPendingList = pendingList.slice(batchSize)

      changeNextUploadFile(nextUploadFiles)
      handleFileUpload(nextUploadFiles)
      updatePendingList(newPendingList)
    }
  }, [
    changeNextUploadFile,
    handleFileUpload,
    nextList,
    pendingList,
    updatePendingList,
    updateUploadStatus,
  ])

  const onEndUpload = useCallback(
    (fileId: string) => {
      const newNextList = nextList.filter(file => file.id !== fileId)
      changeNextUploadFile(newNextList)
    },
    [changeNextUploadFile, nextList]
  )

  const onUploadError = useCallback<OnUploadErrorFn>(
    (error, uploadFile) => {
      onEndUpload(uploadFile.id)
      if (error.type === API_ERROR_TYPES.DUPLICATED_FILE) {
        updateUploadStatus(uploadFile.id, {
          status: 'error',
          message: 'CV này đã tồn tại',
        })

        return
      }

      if (error.type === API_ERROR_TYPES.INVALID_CV) {
        updateUploadStatus(uploadFile.id, {
          status: 'error',
          message: 'CV không hợp lệ',
        })

        return
      }

      updateUploadStatus(uploadFile.id, {
        status: 'error',
        message: 'Tải lên thất bại',
      })
    },
    [onEndUpload, updateUploadStatus]
  )

  const onUploadSucess = useCallback<OnUploadSuccessFn>(
    (_, uploadFile) => {
      updateUploadStatus(uploadFile.id, {
        status: 'success',
        message: 'Tải lên thành công',
      })
      onEndUpload(uploadFile.id)
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SEARCH_RESUME] })
    },
    [onEndUpload, queryClient, updateUploadStatus]
  )

  // End the upload process
  useEffect(() => {
    if (!pendingList.length && !nextList.length && isUploading) {
      changeIsUploading(false)
    }
  }, [changeIsUploading, isUploading, nextList.length, pendingList.length])

  return {
    files,
    addFiles,
  }
}
