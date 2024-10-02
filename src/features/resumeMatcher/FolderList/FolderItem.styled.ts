import styled from '@emotion/styled'
import { ContainerProps } from './FolderItem.type'

export const MenuContainer = styled.div({
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '16px',
  transition: 'opacity 0.15s ease-in-out',
})

export const Container = styled.div({
  position: 'relative',
  cursor: 'pointer',

  [`&:hover ${MenuContainer}, &:has(button[data-state="open"]) ${MenuContainer}`]: {
    opacity: 1,
    visibility: 'visible',
  },
})

export const ContentContainer = styled.div<ContainerProps>(
  {
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: '32px 1fr',
    gap: '12px',

    '&:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      width: '4px',
    },

    [`&:hover ${MenuContainer}, &:has(button[data-state="open"]) ${MenuContainer}`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
  ({ theme, isActive }) => ({
    borderBottom: `1px solid ${theme.colors.slate6}`,
    background: isActive
      ? `linear-gradient(90deg, ${theme.colors.blue1}, ${theme.colors.blue3})`
      : '',

    '&:before': isActive && {
      backgroundColor: theme.colors.blue9,
    },
  })
)

export const Icon = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.blue4,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1/1',
  borderRadius: '6px',
  color: theme.colors.blue9,
}))

export const Title = styled.p(() => ({
  fontSize: '12px',
  fontWeight: 600,
  marginBottom: '4px',
}))

export const CreatedDate = styled.p(({ theme }) => ({
  fontSize: '12px',
  color: theme.colors.slate9,
}))

export const Content = styled.div()
