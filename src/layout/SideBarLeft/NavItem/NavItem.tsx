import * as Tooltip from '@radix-ui/react-tooltip'

import { NavLink, Text, TooltipContent } from './NavItem.styled'
import { NavItemProps } from './NavItem.type'

export function NavItem({ text, to, Icon }: NavItemProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <NavLink to={to}>
            <Icon size={16} />
          </NavLink>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent side='right'>
            <Text>{text}</Text>
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
