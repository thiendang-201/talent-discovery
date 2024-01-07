import styled from '@emotion/styled'

export const Container = styled.div(
  {
    padding: '16px',
    borderLeft: '1px solid',
    height: '100vh',
    position: 'sticky',
    top: 0,
    right: 0,
  },
  ({ theme }) => ({
    borderColor: theme.colors.slate6,
    backgroundColor: theme.colors.background,
  })
)

export const Heading = styled.h6(({ theme }) => ({
  ...theme.headings.sm,
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
}))
