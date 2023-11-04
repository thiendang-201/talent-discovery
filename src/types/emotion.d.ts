import { lightTheme } from '@theme'
import '@emotion/react'

declare module '@emotion/react' {
  export type Theme = typeof lightTheme
}
