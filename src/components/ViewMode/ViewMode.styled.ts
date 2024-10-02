import styled from '@emotion/styled'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { ToggleActiveProps } from './ViewMode.type'

export const ToggleGroupRoot = styled(ToggleGroup.Root)(
  ({ theme }, ...props) => ({
    ...props,
    backgroundColor: theme.colors.gray3,
  }),
  {
    borderRadius: '6px',
    display: 'flex',
    position: 'relative',
  }
)

export const ToggleItem = styled(ToggleGroup.Item)(
  {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '8px',
    verticalAlign: 'middle',
    zIndex: 1,
  },
  ({ theme }) => ({
    color: theme.colors.slate11,

    '&[data-state="on"]': {
      color: theme.colors.slate12,
    },
  })
)

export const ToggleActive = styled.div<ToggleActiveProps>(
  {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: 0,
    transition: 'all 0.2s',
    zIndex: 0,
  },
  ({ theme }) => ({
    '&:after': {
      content: '""',
      backgroundColor: theme.colors.background,
      inset: '2px',
      position: 'absolute',
      borderRadius: '4px',
    },
  }),
  ({ isGrid }) => ({
    left: isGrid ? '0%' : '50%',
  })
)
