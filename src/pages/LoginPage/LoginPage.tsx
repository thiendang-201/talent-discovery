import { LoginForm } from '@features/auth'
import { Container, Header, Heading } from './LoginPage.styled'
import { Logo } from '@components/Logo'

export default function LoginPage() {
  return (
    <Container>
      <Header>
        <Logo width={32} height={32} />
        <Heading>Đăng nhập</Heading>
      </Header>
      <LoginForm />
    </Container>
  )
}
