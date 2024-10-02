import styled from '@emotion/styled'
import { InputProps } from './Input.type'

const VariantInput = styled.input<InputProps>(({ inputSize = 'medium' }) => {
  const padding = {
    small: '4px 6px',
    medium: '8px 10px',
    large: '12px 16px',
  }[inputSize]

  return {
    padding,
  }
})

export const Input = styled(VariantInput)(({ theme }) => ({
  backgroundColor: theme.colors.gray3,
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 500,
  width: '100%',
  border: '2px solid transparent',
  transition: 'all 0.3s',

  '&::placeholder': {
    color: theme.colors.slate10,
  },

  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.blue9,
    boxShadow: `0 0 0 4px ${theme.colors.blue3}`,
  },
}))
