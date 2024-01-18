import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const Header = styled.div({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  marginBottom: '16px',
})

export const Heading = styled.h1({
  fontSize: '20px',
  lineHeight: '30px',
  fontWeight: 600,
})
