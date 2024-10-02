import { ComponentProps, forwardRef } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { StyledButton } from './Button.styled'

export type ButtonProps = {
  isLoading?: boolean
} & ComponentProps<typeof StyledButton>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'medium', isLoading, disabled, children, ...props }, ref) => {
    const loadingIconSize = {
      small: 10,
      medium: 14,
      large: 16,
    }[size]

    return (
      <StyledButton ref={ref} size={size} {...props} disabled={isLoading || disabled}>
        {isLoading ? (
          <TailSpin
            visible={true}
            height={loadingIconSize}
            width={loadingIconSize}
            color='#fff'
            ariaLabel='tail-spin-loading'
            radius='1'
            strokeWidth={4}
          />
        ) : (
          children
        )}
      </StyledButton>
    )
  }
)

export default Button
