import { IconButton } from '@components/Button'
import * as DropdownMenu from '@components/DropdownMenu'
import { RiMoreFill } from 'react-icons/ri'

export function FileMenu({ onMenuOpenChange }: FileMenuProps) {
  return (
    <DropdownMenu.Root onOpenChange={onMenuOpenChange}>
      <DropdownMenu.Trigger asChild>
        <IconButton variant='soft' color='gray' size='small'>
          <RiMoreFill size={16} />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.StyledContent sideOffset={8} align='end'>
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.StyledItem>Di chuyển</DropdownMenu.StyledItem>
            <DropdownMenu.StyledItem>Sao chép</DropdownMenu.StyledItem>
          </DropdownMenu.Group>

          <DropdownMenu.StyledSeparator />

          <DropdownMenu.StyledItem>Xóa bỏ</DropdownMenu.StyledItem>
        </DropdownMenu.StyledContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type FileMenuProps = {
  onMenuOpenChange: (isOpen: boolean) => void
}
