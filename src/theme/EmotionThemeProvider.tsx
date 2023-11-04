import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@emotion/react'

import { lightTheme } from './themes'
import GlobalStyle from './GlobalStyle'

export function EmotionThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
