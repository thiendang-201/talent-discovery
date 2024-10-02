import styled from '@emotion/styled'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const StyledContent = styled(DropdownMenu.Content)(({ theme }) => ({
  boxShadow: theme.shadows.menuShadow,
  backgroundColor: theme.colors.background,
  borderRadius: '8px',
  padding: '6px',
}))

export const StyledItem = styled(DropdownMenu.Item)(
  {
    padding: '6px 10px',
    fontSize: '12px',
    borderRadius: '4px',
    transition: 'all 0.1s',
    outline: 'none',
  },
  ({ theme }) => ({
    color: theme.colors.slate12,

    '&:hover': {
      backgroundColor: theme.colors.blue9,
      color: theme.colors.slate1,
    },
    '&:active': {
      backgroundColor: theme.colors.blue11,
    },
  })
)

export const StyledSeparator = styled(DropdownMenu.Separator)(({ theme }) => ({
  height: '1px',
  backgroundColor: theme.colors.slate6,
  marginBlock: '6px',
}))
