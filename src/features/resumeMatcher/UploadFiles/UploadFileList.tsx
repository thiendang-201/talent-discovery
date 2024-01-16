import { DialogTitle } from '@components/Dialog'
import { UploadFile } from './UploadFile'
import { FileListContainer, FileList } from './UploadFileList.styled'

type UploadFileListProps = {
  files: File[]
}

export function UploadFileList({ files }: UploadFileListProps) {
  console.log({ files })

  if (!files.length) {
    return null
  }

  return (
    <FileListContainer>
      <DialogTitle>Đang tải lên {files.length} CV</DialogTitle>
      <FileList>
        {files.map(file => (
          <UploadFile key={file.name} file={file} />
        ))}
      </FileList>
    </FileListContainer>
  )
}
