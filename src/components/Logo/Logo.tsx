import styled from '@emotion/styled'

export const Logo = styled.div(
  {
    width: '32px',
    height: '32px',
  },
  ({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.colors.indigo9}, ${theme.colors.sky9})`,
  })
)
