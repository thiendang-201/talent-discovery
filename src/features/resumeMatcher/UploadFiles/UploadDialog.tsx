import { Dialog, DialogClose, DialogTitle } from '@components/Dialog'
import { useDropzone } from 'react-dropzone'
import { useUploadResumeQueue, useUploadResumesStore } from '../stores'
import {
  ActionButtonWrapper,
  StyledDialogContent,
  StyledHeader,
  SupportInfoContainer,
  SupportInfoText,
  TopContainer,
  UploadContainer,
} from './UploadDialog.styled'
import { RiCloseLine } from 'react-icons/ri'
import { BiCollapseAlt } from 'react-icons/bi'
import { IconButton } from '@components/Button'
import { UploadFileList } from './UploadFileList'
import { useParams } from 'react-router-dom'

export function UploadResumesDialog() {
  const { folderId = '' } = useParams()
  const { files, addFiles } = useUploadResumeQueue()
  const isOpen = useUploadResumesStore(state => state.isDialogOpen)
  const isUploading = useUploadResumesStore(state => state.isUploading)
  const resetResumesUpload = useUploadResumesStore(state => state.resetResumesUpload)
  const changeDialogOpen = useUploadResumesStore(state => state.changeDialogOpen)
  const { getRootProps, getInputProps, isDragAccept, isDragReject, isFocused } = useDropzone({
    accept: { 'application/pdf': [] },
    maxSize: 1024 * 1024, // bytes
    onDrop: acceptedFiles => {
      addFiles(acceptedFiles, folderId)
    },
  })

  return (
    <Dialog open={isOpen} onOpenChange={changeDialogOpen}>
      <StyledDialogContent>
        <TopContainer>
          <StyledHeader>
            <DialogTitle>Tải lên CV ứng viên</DialogTitle>
            <ActionButtonWrapper>
              <DialogClose asChild>
                <IconButton color='slate' variant='clear'>
                  <BiCollapseAlt size={16} />
                </IconButton>
              </DialogClose>
              <DialogClose asChild disabled={isUploading} onClick={resetResumesUpload}>
                <IconButton color='slate' variant='clear' disabled={isUploading}>
                  <RiCloseLine size={16} />
                </IconButton>
              </DialogClose>
            </ActionButtonWrapper>
          </StyledHeader>
          <UploadContainer
            {...getRootProps({ autoFocus: false })}
            isDragAccept={isDragAccept}
            isDragReject={isDragReject}
            isFocused={isFocused}
          >
            <input {...getInputProps()} />
            <p>Kéo thả CV ứng viên vào đây hoặc nhấn để chọn</p>
          </UploadContainer>
          <SupportInfoContainer>
            <SupportInfoText>Định dạng hỗ trợ: PDF</SupportInfoText>
            <SupportInfoText>Kích thước tối đa: 1MB</SupportInfoText>
          </SupportInfoContainer>
        </TopContainer>
        <UploadFileList uploadFiles={files} />
      </StyledDialogContent>
    </Dialog>
  )
}
