import { DialogTitle } from '@components/Dialog'
import { UploadFile } from './UploadFile'
import { FileListContainer, FileList, StyledScrollArea } from './UploadFileList.styled'
import { UploadFileData, useUploadResumesStore } from '../stores'
import { memo } from 'react'

type UploadFileListProps = {
  uploadFiles: UploadFileData[]
}

function UploadFileListComponent({ uploadFiles }: UploadFileListProps) {
  const uploadStateMap = useUploadResumesStore(state => state.uploadStateMap)
  const isUploading = useUploadResumesStore(state => state.isUploading)

  if (!uploadFiles.length) {
    return null
  }

  return (
    <FileListContainer>
      <DialogTitle>
        {isUploading ? 'Đang tải lên' : 'Đã tải lên'} {uploadFiles.length} CV
      </DialogTitle>
      <StyledScrollArea>
        <FileList>
          {uploadFiles.map(uploadFile => (
            <UploadFile
              key={uploadFile.id}
              fileName={uploadFile.file.name}
              uploadState={uploadStateMap[uploadFile.id]}
            />
          ))}
        </FileList>
      </StyledScrollArea>
    </FileListContainer>
  )
}

export const UploadFileList = memo(UploadFileListComponent)
