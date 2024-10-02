import styled from '@emotion/styled'
import { StyledUploadContainerProps } from './UploadDialog.type'
import { DialogContent, DialogHeader } from '@components/Dialog'

export const UploadContainer = styled.div<StyledUploadContainerProps>(
  {
    paddingBlock: '60px',
    borderRadius: '6px',
    border: `2px dashed transparent`,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'border, background-color .24s ease-in-out',
    marginBottom: '4px',

    p: {
      fontSize: '12px',
      fontWeight: 500,
    },
  },
  ({ theme, isFocused, isDragAccept, isDragReject }) => {
    switch (true) {
      case isDragAccept:
        return {
          borderColor: theme.colors.green8,
          backgroundColor: theme.colors.green2,
          color: theme.colors.green9,
        }
      case isDragReject:
        return {
          borderColor: theme.colors.red8,
          backgroundColor: theme.colors.red2,
          color: theme.colors.red9,
        }
      case isFocused:
        return {
          borderColor: theme.colors.blue8,
          backgroundColor: theme.colors.blue2,
          color: theme.colors.blue9,
        }
      default:
        return {
          borderColor: theme.colors.slate8,
          backgroundColor: theme.colors.gray2,
          color: theme.colors.slate9,
        }
    }
  }
)

export const StyledHeader = styled(DialogHeader)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: '8px',
  alignItems: 'center',
})

export const ActionButtonWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '2px',
})

export const SupportInfoContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
})

export const SupportInfoText = styled.p(({ theme }) => ({
  color: theme.colors.slate9,
  fontSize: '12px',
}))

export const StyledDialogContent = styled(DialogContent)({
  padding: 0,
})

export const TopContainer = styled.div({
  padding: '24px',
  paddingBottom: 0,
})
