import { Dialog, DialogClose, DialogContent, DialogTitle } from '@components/Dialog'
import { useDropzone } from 'react-dropzone'
import { useUploadResumes } from '../stores'
import {
  StyledHeader,
  SupportInfoContainer,
  SupportInfoText,
  UploadContainer,
} from './UploadDialog.styled'
import { RiCloseLine } from 'react-icons/ri'
import { IconButton } from '@components/Button'
import { UploadFileList } from './UploadFileList'

export function UploadResumesDialog() {
  const isOpen = useUploadResumes(state => state.isDialogOpen)
  const changeDialogOpen = useUploadResumes(state => state.changeDialogOpen)
  const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragReject, isFocused } =
    useDropzone({ accept: { 'application/pdf': [] } })

  return (
    <Dialog open={isOpen} onOpenChange={changeDialogOpen}>
      <DialogContent>
        <StyledHeader>
          <DialogTitle>Tải lên CV ứng viên</DialogTitle>
          <DialogClose asChild>
            <IconButton color='slate' variant='clear'>
              <RiCloseLine size={16} />
            </IconButton>
          </DialogClose>
        </StyledHeader>
        <UploadContainer
          {...getRootProps({ autoFocus: false })}
          isDragAccept={isDragAccept}
          isDragReject={isDragReject}
          isFocused={isFocused}
        >
          <p>Kéo thả CV ứng viên vào đây hoặc nhấn để chọn</p>
        </UploadContainer>
        <SupportInfoContainer>
          <SupportInfoText>Định dạng hỗ trợ: PDF</SupportInfoText>
          <SupportInfoText>Kích thước tối đa: 5MB</SupportInfoText>
        </SupportInfoContainer>
        <UploadFileList files={acceptedFiles} />
      </DialogContent>
    </Dialog>
  )
}
