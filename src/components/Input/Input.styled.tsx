import styled from '@emotion/styled'

export const Input = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.gray3,
  border: 'none',
  padding: '8px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 500,
  width: '100%',

  '&::placeholder': {
    color: theme.colors.slate10,
  },
}))
