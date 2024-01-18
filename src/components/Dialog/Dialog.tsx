import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  StyledDescription,
  StyledDialogContent,
  StyledDialogOverlay,
  StyledFooter,
  StyledHeader,
  StyledTitle,
} from './Dialog.styled'
import { DialogContentProps } from './Dialog.type'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogHeader = StyledHeader

const DialogFooter = StyledFooter

const DialogTitle = StyledTitle

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ ...props }, ref) => <StyledDialogOverlay ref={ref} {...props} />)

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & DialogContentProps
>(({ children, maxWidth, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={ref} maxWidth={maxWidth} {...props}>
      {children}
    </StyledDialogContent>
  </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => <StyledDescription ref={ref} {...props} />)

DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
