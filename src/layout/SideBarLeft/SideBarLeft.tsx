import { BsFillPeopleFill, BsIntersect } from 'react-icons/bs'

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
        <NavItem to='/interview-questions' text='Câu hỏi phỏng vấn' Icon={BsIntersect} />
      </NavList>
    </Container>
  )
}
