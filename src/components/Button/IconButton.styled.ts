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
    aspectRatio: '1/1',
  },
  ({ size = 'medium' }) => {
    const padding = {
      small: '2px',
      medium: '6px',
      large: '12px',
    }[size!]

    return {
      padding,
    }
  }
)
