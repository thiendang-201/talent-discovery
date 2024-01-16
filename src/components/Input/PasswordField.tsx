import { ComponentProps, forwardRef, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { FieldContainer, FieldContainerProps } from './FieldContainer'
import { PasswordFieldContainer, StyledPwInput, ToggleButton } from './PasswordField.styled'
import { IconType } from 'react-icons'
import { Input } from './Input.styled'

type PasswordFieldProps = FieldContainerProps & ComponentProps<typeof Input>

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const PasswordIcon: IconType = showPassword ? FaRegEye : FaRegEyeSlash
    const inputType = showPassword ? 'text' : 'password'

    const toggleShowPassword = () => setShowPassword(show => !show)

    return (
      <FieldContainer label={label} error={error}>
        <PasswordFieldContainer>
          <StyledPwInput {...props} type={inputType} ref={ref} />
          <ToggleButton onClick={toggleShowPassword} variant='clear' color='none'>
            <PasswordIcon size={16} />
          </ToggleButton>
        </PasswordFieldContainer>
      </FieldContainer>
    )
  }
)

export { PasswordField }
