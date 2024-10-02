import { BsFillPeopleFill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'

import { Container, LogoBox, NavList } from './SideBarLeft.styled'
import { NavItem } from './NavItem'
import { Logo } from '@components/Logo'

export function SideBarLeft() {
  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <NavList>
        <NavItem to='/resume-matcher' text='Lọc CV' Icon={BsFillPeopleFill} />
        <NavItem to='/login' text='Đăng xuất' Icon={BiLogOutCircle} />
      </NavList>
    </Container>
  )
}
