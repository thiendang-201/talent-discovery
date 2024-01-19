import { useVisible } from '@/hooks'
import { IconButton } from '@components/Button'
import * as DropdownMenu from '@components/DropdownMenu'
import { RiMoreFill } from 'react-icons/ri'
import { FolderForm } from './FolderForm'
import { SubmitFolderFormFn } from './FolderForm.type'
import { useUpdateFolder } from '@/api/folder'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'
import { useMemo } from 'react'

type FolderMenuProps = {
  folder_id: string
  folder_name: string
}

export function FolderMenu({ folder_id, folder_name }: FolderMenuProps) {
  const [isVisible, modalHandler] = useVisible()
  const { mutateAsync: updateFolder } = useUpdateFolder()
  const queryClient = useQueryClient()

  const defaultFolderFormValues = useMemo(
    () => ({
      folder_name,
    }),
    [folder_name]
  )

  const onChangeFolderNameSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_LIST] })
    modalHandler.off()
  }

  const onChangeFolderName: SubmitFolderFormFn = ({ folder_name }) => {
    const changeFolderData = {
      folder_name,
      folder_id,
    }

    return updateFolder(changeFolderData, {
      onSuccess: onChangeFolderNameSuccess,
    })
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton variant='soft' color='gray' size='small'>
          <RiMoreFill size={16} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.StyledContent sideOffset={8} align='end' forceMount>
          <DropdownMenu.StyledItem onClick={modalHandler.on}>
            Đổi tên Thư mục
          </DropdownMenu.StyledItem>
          <DropdownMenu.StyledSeparator />
          <DropdownMenu.StyledItem>Xóa thư mục</DropdownMenu.StyledItem>
        </DropdownMenu.StyledContent>
      </DropdownMenu.Portal>
      <FolderForm
        isVisible={isVisible}
        onSubmit={onChangeFolderName}
        changeVisible={modalHandler.changeVisible}
        submitText='Lưu'
        heading='Đổi tên thư mục'
        defaultValues={defaultFolderFormValues}
      />
    </DropdownMenu.Root>
  )
}
