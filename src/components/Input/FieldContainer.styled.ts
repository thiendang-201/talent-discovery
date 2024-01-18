import styled from '@emotion/styled'

export const Container = styled.label({
  display: 'flex',
  gap: '6px',
  flexDirection: 'column',
})

export const Label = styled.span(({ theme }) => ({
  fontSize: '12px',
  color: theme.colors.slate9,
}))

export const ErrorText = styled.p(({ theme }) => ({
  color: theme.colors.red9,
  fontSize: '12px',
  minHeight: '14px',
}))
