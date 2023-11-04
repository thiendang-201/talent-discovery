import { PiLightningDuotone } from 'react-icons/pi'
import { BsFillPeopleFill, BsIntersect } from 'react-icons/bs'
import { useTheme } from '@emotion/react'

import { Container, LogoBox, NavList } from './SideBarLeft.styled'
import { NavItem } from './NavItem'

export function SideBarLeft() {
  const { colors } = useTheme()

  return (
    <Container>
      <LogoBox>
        <PiLightningDuotone size={32} color={colors.slate12} />
      </LogoBox>
      <NavList>
        <NavItem to='/resume-matcher' text='Lọc CV' Icon={BsFillPeopleFill} />
        <NavItem to='/interview-questions' text='Câu hỏi phỏng vấn' Icon={BsIntersect} />
      </NavList>
    </Container>
  )
}
