import styled from '@emotion/styled'

export const Header = styled.div(
  ({ theme }) => ({
    backgroundColor: theme.colors.gray3,
  }),
  {
    borderRadius: '8px',
    aspectRatio: '4 / 3',
    padding: '24px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'all 0.2s',
    marginBottom: '12px',
    userSelect: 'none',
  }
)

export const BodyLeft = styled.div({})

export const BodyRight = styled.div({
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.2s',
})

export const Container = styled.div(
  {
    borderRadius: '8px',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    paddingBottom: '4px',
  },
  ({ theme }) => ({
    [`&:hover ${Header}, &.menu-opened ${Header}`]: {
      backgroundColor: theme.colors.gray5,
    },

    [`&:hover ${BodyRight}, &.menu-opened ${BodyRight}`]: {
      opacity: 1,
      visibility: 'visible',
    },
  })
)

export const PreviewCV = styled.img({
  height: '100%',
})

export const Name = styled.p({
  fontWeight: 500,
  textTransform: 'capitalize',
  marginBottom: '4px',
})

export const JobTitle = styled.p(
  {
    fontSize: '12px',
  },
  ({ theme }) => ({
    color: theme.colors.slate9,
    fontWeight: 500,
  })
)

export const Body = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
