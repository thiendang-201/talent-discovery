import styled from '@emotion/styled'
import { ButtonProps } from './Button.type'
import { getKey } from '@/utils'

export const VariantButton = styled.button<ButtonProps>(
  ({ variant = 'solid', theme, color = 'primary' }) => {
    const colors = theme.colors
    const key = getKey([variant, color])

    const backgroundColor = {
      solid_primary: colors.blue9,

      soft_primary: colors.blue3,
      soft_slate: colors.slate3,
      soft_gray: colors.gray3,

      outline_primary: colors.blue3,
      outline_slate: colors.slate3,
      outline_gray: colors.gray3,
    }[key]

    const textColor = {
      solid_primary: colors.slate1,

      soft_primary: colors.blue9,
      soft_slate: colors.slate12,
      soft_gray: colors.gray12,

      outline_primary: colors.blue9,
      outline_slate: colors.slate12,
      outline_gray: colors.gray12,
    }[key]

    const hoverBg = {
      clear_slate: colors.slate3,
      clear_gray: colors.gray3,
      clear_primary: colors.blue3,

      solid_primary: colors.blue11,

      soft_primary: colors.blue5,
      soft_slate: colors.slate5,
      soft_gray: colors.gray5,

      outline_primary: colors.blue5,
      outline_slate: colors.slate5,
      outline_gray: colors.gray5,
    }[key]

    const activeBg = {
      clear_slate: colors.slate5,
      clear_gray: colors.gray5,
      clear_primary: colors.blue5,

      solid_primary: colors.blue12,

      soft_primary: colors.blue6,
      soft_slate: colors.slate6,
      soft_gray: colors.gray6,

      outline_primary: colors.blue6,
      outline_slate: colors.slate6,
      outline_gray: colors.gray6,
    }[key]

    const boxShadow = {
      solid_primary: `0 4px 8px 0 ${colors.blue9}4D`,
    }[key]

    const borderColor = {
      outline_primary: colors.blue9,
      outline_slate: colors.slate9,
      outline_gray: colors.gray9,
    }[key]

    return {
      backgroundColor,
      color: textColor,

      '&:hover': {
        backgroundColor: hoverBg,
      },

      '&:active': {
        backgroundColor: activeBg,
      },

      boxShadow,
      border: borderColor ? `1px solid ${borderColor}` : 'none',
    }
  }
)

const StyledButton = styled(VariantButton)({
  fontSize: '12px',
  fontWeight: 500,
  padding: '8px 10px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  cursor: 'pointer',
  transition: '0.2s all ease-out',
  borderRadius: '6px',
})

export default StyledButton
