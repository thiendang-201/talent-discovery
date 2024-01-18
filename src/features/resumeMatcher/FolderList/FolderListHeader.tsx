import { Input } from '@components/Input'
import { RiFoldersLine } from 'react-icons/ri'
import { Header, Heading, SearchContainer, TopContainer } from './FolderList.styled'
import { ChangeEvent } from 'react'
import { FiPlus } from 'react-icons/fi'
import { IconButton } from '@components/Button'
import { FolderForm } from './FolderForm'
import { SubmitFolderFormFn } from './FolderForm.type'
import { useCreateFolder } from '@/api/folder'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'
import { useVisible } from '@/hooks'

type FolderListHeaderProps = {
  searchValue: string
  changeSearchValue: (value: string) => void
}

export function FolderListHeader({ searchValue, changeSearchValue }: FolderListHeaderProps) {
  const { mutateAsync: createFolder } = useCreateFolder()
  const queryClient = useQueryClient()
  const [isModalOpen, modalHandler] = useVisible()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSearchValue(e.target.value)
  }

  const onAddFolder: SubmitFolderFormFn = async values => {
    await createFolder(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_LIST] })
        modalHandler.off()
      },
    })
  }

  return (
    <Header>
      <TopContainer>
        <Heading>
          <RiFoldersLine size={22} />
          Thư mục
        </Heading>
        <IconButton variant='outline' size='small' onClick={modalHandler.on}>
          <FiPlus size={14} />
        </IconButton>
        <FolderForm
          submitText='Tạo mới'
          onSubmit={onAddFolder}
          isVisible={isModalOpen}
          changeVisible={modalHandler.changeVisible}
        />
      </TopContainer>

      <SearchContainer>
        <Input placeholder='Tìm kiếm thư mục' value={searchValue} onChange={handleChange} />
      </SearchContainer>
    </Header>
  )
}
