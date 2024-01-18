import styled from '@emotion/styled'
import { ButtonProps } from './Button.type'
import { getKey } from '@/utils'

export const VariantButton = styled.button<ButtonProps>(
  ({ variant = 'solid', theme, color = 'primary', size = 'medium' }) => {
    const colors = theme.colors
    const key = getKey([variant, color])

    const backgroundColor = {
      solid_primary: colors.blue9,
      solid_slate: colors.slate9,
      solid_gray: colors.gray9,
      solid_red: colors.red9,

      soft_primary: colors.blue3,
      soft_slate: colors.slate3,
      soft_gray: colors.gray3,
      soft_red: colors.red3,

      outline_primary: colors.blue3,
      outline_slate: colors.slate3,
      outline_gray: colors.gray3,
      outline_red: colors.red3,
    }[key]

    const textColor = {
      solid_primary: colors.slate1,
      solid_slate: colors.slate1,
      solid_gray: colors.slate1,
      solid_red: colors.slate1,

      soft_primary: colors.blue9,
      soft_slate: colors.slate12,
      soft_gray: colors.gray12,
      soft_red: colors.red9,

      outline_primary: colors.blue9,
      outline_slate: colors.slate12,
      outline_gray: colors.gray12,
      outline_red: colors.red9,
    }[key]

    const hoverBg = {
      clear_slate: colors.slate3,
      clear_gray: colors.gray3,
      clear_primary: colors.blue3,
      clear_red: colors.red3,

      solid_slate: colors.slate11,
      solid_gray: colors.gray11,
      solid_primary: colors.blue11,
      solid_red: colors.red11,

      soft_primary: colors.blue5,
      soft_slate: colors.slate5,
      soft_gray: colors.gray5,
      soft_red: colors.red5,

      outline_primary: colors.blue5,
      outline_slate: colors.slate5,
      outline_gray: colors.gray5,
      outline_red: colors.red5,
    }[key]

    const activeBg = {
      clear_slate: colors.slate5,
      clear_gray: colors.gray5,
      clear_primary: colors.blue5,
      clear_red: colors.red5,

      solid_slate: colors.slate12,
      solid_gray: colors.gray12,
      solid_primary: colors.blue12,
      solid_red: colors.red12,

      soft_primary: colors.blue6,
      soft_slate: colors.slate6,
      soft_gray: colors.gray6,
      soft_red: colors.red6,

      outline_primary: colors.blue6,
      outline_slate: colors.slate6,
      outline_gray: colors.gray6,
      outline_red: colors.red6,
    }[key]

    const boxShadow = {
      solid_primary: `0 4px 8px 0 ${colors.blue9}4D`,
    }[key]

    const borderColor = {
      outline_primary: colors.blue9,
      outline_slate: colors.slate9,
      outline_gray: colors.gray9,
    }[key]

    const padding = {
      small: '4px 6px',
      medium: '8px 10px',
      large: '12px 16px',
    }[size]

    const minHeight = {
      small: '28px',
      medium: '40px',
      large: '46px',
    }[size]

    return {
      backgroundColor,
      color: textColor,
      minHeight,

      '&:hover': {
        backgroundColor: hoverBg,
      },

      '&:active': {
        backgroundColor: activeBg,
      },

      '&:disabled': {
        opacity: 0.8,
        backgroundColor,
      },

      boxShadow,
      border: borderColor ? `1px solid ${borderColor}` : 'none',
      padding,
    }
  }
)

export const StyledButton = styled(VariantButton)({
  fontSize: '12px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  cursor: 'pointer',
  transition: '0.2s all ease-out',
  borderRadius: '6px',
  textAlign: 'center',
  justifyContent: 'center',
})
