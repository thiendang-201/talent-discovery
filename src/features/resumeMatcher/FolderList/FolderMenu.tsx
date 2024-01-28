import { useVisible } from '@/hooks'
import { IconButton } from '@components/Button'
import * as DropdownMenu from '@components/DropdownMenu'
import { RiMoreFill } from 'react-icons/ri'
import { FolderForm } from './FolderForm'
import { SubmitFolderFormFn } from './FolderForm.type'
import { useRemoveFolder, useUpdateFolder } from '@/api/folder'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'
import { useMemo } from 'react'
import { RemoveDialog } from '@components/RemoveDialog'
import { useNavigate, useParams } from 'react-router-dom'

type FolderMenuProps = {
  folder_id: string
  folder_name: string
}

export function FolderMenu({ folder_id, folder_name }: FolderMenuProps) {
  const [isEditFolderModalVisible, editFolderModalHandler] = useVisible()
  const [isRemoveFolderModalVisible, removeFolderModalHandler] = useVisible()
  const { mutateAsync: updateFolder } = useUpdateFolder()
  const { mutate: removeFolder, isPending: isRemoving } = useRemoveFolder()
  const queryClient = useQueryClient()
  const { folderId: selectedFolderId } = useParams()
  const navigate = useNavigate()

  const defaultFolderFormValues = useMemo(
    () => ({
      folder_name,
    }),
    [folder_name]
  )

  const onChangeFolderNameSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_LIST] })
    editFolderModalHandler.off()
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

  const onRemoveFolderSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_LIST] })
    removeFolderModalHandler.off()
    selectedFolderId === folder_id && navigate('/')
  }

  const onRemoveFolder = () => {
    removeFolder(folder_id, { onSuccess: onRemoveFolderSuccess })
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
          <DropdownMenu.StyledItem onClick={editFolderModalHandler.on}>
            Đổi tên Thư mục
          </DropdownMenu.StyledItem>
          <DropdownMenu.StyledSeparator />
          <DropdownMenu.StyledItem onClick={removeFolderModalHandler.on}>
            Xóa thư mục
          </DropdownMenu.StyledItem>
        </DropdownMenu.StyledContent>
      </DropdownMenu.Portal>
      <FolderForm
        isVisible={isEditFolderModalVisible}
        onSubmit={onChangeFolderName}
        changeVisible={editFolderModalHandler.changeVisible}
        submitText='Lưu'
        heading='Đổi tên thư mục'
        defaultValues={defaultFolderFormValues}
      />
      <RemoveDialog
        isPending={isRemoving}
        isVisible={isRemoveFolderModalVisible}
        changeVisible={removeFolderModalHandler.changeVisible}
        heading='Xóa thư mục'
        removeMsg={`Toàn bộ CV hồ sơ trong thư mục ${folder_name} sẽ bị xóa khỏi hệ thống!`}
        onConfirm={onRemoveFolder}
      />
    </DropdownMenu.Root>
  )
}
