import styled from '@emotion/styled'

export const Container = styled.div(
  {
    gridArea: 'sidebar',
    height: '100vh',
    display: 'grid',
    gridTemplateRows: '64px 1fr 64px',
    border: '1px solid',
    position: 'sticky',
    top: 0,
  },
  ({ theme }) => ({
    borderColor: theme.colors.slate6,
    backgroundColor: theme.colors.background,
  })
)

export const LogoBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const NavList = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '20px',
  gap: '10px',
})
