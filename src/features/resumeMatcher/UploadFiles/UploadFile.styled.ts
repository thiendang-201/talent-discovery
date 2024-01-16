import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  paddingBlock: '12px',
})

export const ContentContainer = styled.div({
  display: 'flex',
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

export const FileSize = styled.p(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '14px',
  color: theme.colors.slate9,
}))
