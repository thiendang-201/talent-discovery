import { PropsWithChildren } from 'react'
import { EmotionThemeProvider } from './EmotionThemeProvider'

export function AppThemeProvider({ children }: PropsWithChildren) {
  return <EmotionThemeProvider>{children}</EmotionThemeProvider>
}
