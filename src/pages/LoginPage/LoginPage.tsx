import { LoginForm, LoginSubmitFn } from '@features/auth'
import { Container, Header, Heading } from './LoginPage.styled'
import { Logo } from '@components/Logo'

export default function LoginPage() {
  const onSubmit: LoginSubmitFn = values => {
    console.log(values)
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Heading>Đăng nhập</Heading>
      </Header>
      <LoginForm onSubmit={onSubmit} />
    </Container>
  )
}
