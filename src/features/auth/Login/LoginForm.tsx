import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inititalLoginValues, loginSchema } from './LoginForm.constant'
import { PasswordField, TextField } from '@components/Input'
import { Container, SubmitButton } from './LoginForm.styled'
import { useLogin } from '@/api/user'
import { useAuth } from '../stores'
import { useNavigate } from 'react-router-dom'
import { LoginSubmitFn } from './LoginForm.type'
import { API_ERROR_TYPES } from '@/constants'

export function LoginForm() {
  const navigate = useNavigate()
  const { mutateAsync: login, isPending, isError } = useLogin()
  const localLogin = useAuth(state => state.localLogin)
  const { register, formState, handleSubmit, setError } = useForm({
    defaultValues: inititalLoginValues,
    resolver: zodResolver(loginSchema),
  })

  const { errors } = formState

  const onSubmit: LoginSubmitFn = values => {
    return login(values, {
      onSuccess: () => {
        localLogin(values)
        navigate('/')
      },
      onError: error => {
        if (error.type === API_ERROR_TYPES.USER_FORBIDEN) {
          setError('password', { message: 'Tài khoản hoặc mật khẩu không đúng' })
        }
      },
    })
  }

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
        <SubmitButton isLoading={isPending && !isError} size='large'>
          Đăng nhập
        </SubmitButton>
      </Container>
    </form>
  )
}
