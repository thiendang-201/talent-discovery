import styled from '@emotion/styled'
import * as Tooltip from '@radix-ui/react-tooltip'
import { NavLink as RRDNavLink } from 'react-router-dom'

export const NavLink = styled(RRDNavLink)(
  {
    borderRadius: '999px',
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ theme }) => ({
    color: theme.colors.slate11,

    '&.active': {
      backgroundColor: theme.colors.slate12,
      color: theme.colors.blue9,
    },
    '&:not(.active):hover': {
      backgroundColor: theme.colors.slate3,
    },
  })
)

export const TooltipContent = styled(Tooltip.Content)(
  {
    borderRadius: 4,
    padding: '10px 15px',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray12,
    color: theme.colors.slate1,
  })
)

export const Text = styled.span({
  fontWeight: 500,
  fontSize: 12,
})
