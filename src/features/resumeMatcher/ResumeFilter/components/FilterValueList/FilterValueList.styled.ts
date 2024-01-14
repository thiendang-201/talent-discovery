import styled from '@emotion/styled'

export const StyledTitle = styled.h3(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '14px',
  color: theme.colors.slate9,
  fontWeight: 600,

  '&:first-letter': {
    textTransform: 'uppercase',
  },
}))

export const Header = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    left: 0,
    paddingBlock: '16px 4px',
    paddingInline: '16px',
    alignItems: 'center',
    marginTop: '-10px',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.background,
  })
)

export const Container = styled.div({
  flex: 1,
  height: '0px',
  display: 'flex',
  flexDirection: 'column',
})
