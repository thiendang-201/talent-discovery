import { useTheme, Global } from '@emotion/react'

export default function GlobalStyle() {
  const theme = useTheme()

  return (
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
          padding: 0,
          margin: 0,
        },
        body: {
          fontFamily: '"Lexend", sans-serif',
          fontOpticalSizing: 'auto',
          fontSize: '14px',
          color: theme.colors.slate12,
        },
        a: {
          textDecoration: 'none',
        },
        button: {
          webkitAppearance: 'none',
          borderRadius: '0px',
          textAlign: 'inherit',
          background: 'none',
          boxShadow: 'none',
          padding: 0,
          cursor: 'pointer',
          border: 'none',
          color: 'inherit',
          font: 'inherit',
          outline: 'none',
        },
        h1: {
          lineHeight: 1.4,
        },
        p: {
          lineHeight: 1.2,
        },
      }}
    />
  )
}
