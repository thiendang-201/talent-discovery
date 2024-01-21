import styled from '@emotion/styled'
import { UploadStatusProps } from './UploadFile.type'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  paddingBlock: '12px',
})

export const ContentContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export const FileInfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const FileName = styled.p(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: 600,
  color: theme.colors.slate11,
  marginRight: 'auto',
}))

export const UploadStatus = styled.p<UploadStatusProps>(({ theme, status }) => {
  const color = {
    pending: theme.colors.blue9,
    uploading: theme.colors.blue9,
    processing: theme.colors.blue9,
    success: theme.colors.grass9,
    error: theme.colors.red9,
  }[status]

  return {
    fontSize: '12px',
    lineHeight: '14px',
    color,
  }
})

export const UploadSize = styled.p(({ theme }) => ({
  color: theme.colors.slate9,
  fontSize: '12px',
  lineHeight: '14px',
}))
