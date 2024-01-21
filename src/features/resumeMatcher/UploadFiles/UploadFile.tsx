import { Progress } from '@components/Progress'
import prettyBytes from 'pretty-bytes'
import {
  Container,
  ContentContainer,
  FileName,
  UploadSize,
  UploadStatus,
} from './UploadFile.styled'
import { UploadStateRecord } from '../stores'
import { useTheme } from '@emotion/react'

export type UploadFileProps = {
  fileName: string
  uploadState: UploadStateRecord
}

export function UploadFile({ fileName, uploadState }: UploadFileProps) {
  const { colors } = useTheme()

  const { states, uploadedBytes, totalBytes } = uploadState
  const progress = Math.round((uploadedBytes / totalBytes) * 100)
  const latestStateIndex = states.length - 1
  const latestState = states[latestStateIndex]

  const getProgressBarColor = () => {
    switch (latestState.status) {
      case 'error':
        return colors.red9
      case 'success':
        return colors.grass9
      default:
        return colors.blue9
    }
  }

  return (
    <Container>
      <FileName>{fileName}</FileName>
      <Progress value={progress} color={getProgressBarColor()} />
      <ContentContainer>
        <UploadSize>
          Đã tải lên: {prettyBytes(uploadedBytes)}/{prettyBytes(totalBytes)}`
        </UploadSize>
        <UploadStatus status={latestState.status}>{latestState.message}</UploadStatus>
      </ContentContainer>
    </Container>
  )
}
