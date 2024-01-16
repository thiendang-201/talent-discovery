// import { useState } from 'react'
import { Progress } from '@components/Progress'
import prettyBytes from 'pretty-bytes'
import { Container, ContentContainer, FileName, FileSize } from './UploadFile.styled'

type UploadFileProps = {
  file: File
}

export function UploadFile({ file }: UploadFileProps) {
  // const [progress, setProgress] = useState(0)

  return (
    <Container>
      <ContentContainer>
        <FileName>{file.name}</FileName>
        <FileSize>
          Đang tải lên: {prettyBytes(file.size)}/{prettyBytes(file.size)}
        </FileSize>
      </ContentContainer>
      <Progress value={60} />
    </Container>
  )
}
