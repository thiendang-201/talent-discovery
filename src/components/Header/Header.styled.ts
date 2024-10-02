import styled from '@emotion/styled'

export const Right = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
})

export const Left = styled.div({
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
})

export const Heading = styled.h1(({ theme }) => ({
  ...theme.headings.sme,
}))

export const Container = styled.div(
  {
    display: 'flex',
    gap: 12,
    paddingInline: '24px',
    height: '52px',
    alignItems: 'center',
    backgroundClip: String(Left),
  },
  {
    [`${Left}:has(+${Heading})`]: {
      marginRight: 0,
    },
  }
)
