import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inititalLoginValues, loginSchema } from './LoginForm.constant'
import { PasswordField, TextField } from '@components/Input'
import { Container, SubmitButton } from './LoginForm.styled'
import { LoginSubmitFn } from './LoginForm.type'

type LoginFormProps = {
  onSubmit: LoginSubmitFn
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: inititalLoginValues,
    resolver: zodResolver(loginSchema),
  })

  const { errors } = formState

  console.log({ errors })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <TextField
          {...register('email')}
          label='Email'
          placeholder='Nhập email'
          inputSize='large'
          error={errors.email?.message}
        />
        <PasswordField
          {...register('password')}
          label='Mật khẩu'
          placeholder='Nhập mật khẩu'
          inputSize='large'
          error={errors.password?.message}
        />
        <SubmitButton size='large'>Đăng nhập</SubmitButton>
      </Container>
    </form>
  )
}
