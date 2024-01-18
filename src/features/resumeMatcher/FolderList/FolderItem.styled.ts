import styled from '@emotion/styled'
import { ContainerProps } from './FolderItem.type'

export const Container = styled.div<ContainerProps>(
  {
    padding: '16px',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '32px 1fr',
    gap: '12px',

    '&:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      right: 0,
      width: '4px',
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
