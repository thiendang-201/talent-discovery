import styled from '@emotion/styled'

export const Container = styled.div(
  {
    borderRight: `1px solid`,
    height: '100vh',
    display: 'grid',
    gridTemplateRows: '104px 1fr',
    gridTemplateAreas: `
      'header'
      'list'
    `,
    position: 'sticky',
    top: 0,
  },
  ({ theme }) => ({
    borderColor: theme.colors.slate6,
    backgroundColor: theme.colors.background,
  })
)

export const Header = styled.div(
  {
    gridArea: 'header',
    paddingTop: '16px',
    paddingInline: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.slate6}`,
  })
)

export const Heading = styled.h5(({ theme }) => ({
  ...theme.headings.sme,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flex: 1,
}))

export const SearchContainer = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
})

export const TopContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
