import { CSSProperties } from 'react'

export type ButtonProps = {
  variant?: 'solid' | 'clear' | 'soft' | 'outline'
  color?: 'primary' | 'slate' | 'gray' | 'none' | 'red'
  size?: 'small' | 'medium' | 'large'
  radius?: CSSProperties['borderRadius']
}
