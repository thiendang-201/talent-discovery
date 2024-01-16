import { ComponentProps, forwardRef } from 'react'
import { FieldContainer, FieldContainerProps } from './FieldContainer'
import { Input } from './Input.styled'

export type TextFieldProps = FieldContainerProps & ComponentProps<typeof Input>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <FieldContainer label={label} error={error}>
        <Input {...props} type='text' ref={ref} />
      </FieldContainer>
    )
  }
)
