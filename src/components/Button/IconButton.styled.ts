import styled from '@emotion/styled'
import { VariantButton } from './Button.styled'

export const IconButton = styled(VariantButton)(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: '0.2s all ease-out',
    borderRadius: '6px',
  },
  ({ size = 'medium' }) => {
    const padding = {
      small: '6px',
      medium: '8px',
      large: '12px',
    }[size!]

    return {
      padding,
    }
  }
)
