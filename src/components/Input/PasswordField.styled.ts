import styled from '@emotion/styled'
import { Input } from '.'
import { IconButton } from '@components/Button'

export const PasswordFieldContainer = styled.div({
  position: 'relative',
})

export const StyledPwInput = styled(Input)({
  paddingRight: '36px',
})

export const ToggleButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  right: '8px',
  transform: 'translateY(-50%)',
})
