import { Outlet } from 'react-router-dom'
import { Container, InnerContent } from './Layout.styled'
import { SideBarLeft } from '../SideBarLeft'

export default function Layout() {
  return (
    <Container>
      <SideBarLeft />
      <InnerContent>
        <Outlet />
      </InnerContent>
    </Container>
  )
}
