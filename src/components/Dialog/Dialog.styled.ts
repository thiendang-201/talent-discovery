import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { DialogContentProps } from './Dialog.type'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

const fadeOut = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } })

const slideTopIn = keyframes({
  from: { transform: 'scale(0.95) translate(-50%, -80%)' },
  to: { transform: 'scale(1) translate(-50%, -50%)' },
})

const slideTopOut = keyframes({
  from: { transform: 'scale(1) translate(-50%, -50%)' },
  to: { transform: 'scale(0.95) translate(-50%, -80%)' },
})

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)(props => ({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  backgroundColor: props.theme.colors.blackA2,
  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(10px)',

  "&[data-state='open']": {
    opacity: 1,
    animation: `${fadeIn} 0.3s ease-in-out`,
  },
  "&[data-state='closed']": {
    opacity: 0,
    animation: `${fadeOut} 0.3s ease-in-out`,
  },
}))

const StyledDialogContent = styled(DialogPrimitive.Content)<DialogContentProps>(
  ({ maxSize, ...props }) => ({
    position: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: 50,
    display: 'grid',
    width: '100%',
    maxWidth: maxSize ?? '800px',
    gap: '4px',
    backgroundColor: props.theme.colors.background,
    padding: '24px',
    borderRadius: '12px',
    transformOrigin: 'bottom left',
    transform: 'scale(1) translate(-50%, -50%)',
    transition: 'all 0.2s ease-in-out',

    "&[data-state='open']": {
      animation: `${fadeIn} 0.2s ease-in-out, ${slideTopIn} 0.2s ease-in-out`,
    },

    "&[data-state='closed']": {
      animation: `${fadeOut} 0.2s ease-in-out, ${slideTopOut} 0.2s ease-in-out`,
    },
  })
)

const StyledHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  columnGap: '6px',
})

const StyledFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '8px',
})

const StyledTitle = styled(DialogPrimitive.Title)({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: '-0.4px',
})

const StyledDescription = styled(DialogPrimitive.Description)(props => ({
  fontSize: '14px',
  lineHeight: '20px',
  color: props.theme.colors.gray10,
}))

export {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledHeader,
  StyledFooter,
  StyledTitle,
  StyledDescription,
}
