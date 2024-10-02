import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export type LogoProps = {
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

export const Logo = styled.div<LogoProps>(({ theme, width = 32, height = 32 }) => ({
  background: `linear-gradient(45deg, ${theme.colors.indigo9}, ${theme.colors.sky9})`,
  width,
  height,
}))
