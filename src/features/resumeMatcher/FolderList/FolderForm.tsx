import { useForm } from 'react-hook-form'
import { folderSchema, initialFolderFormValues } from './FolderForm.constant'
import { zodResolver } from '@hookform/resolvers/zod'
import { FolderFormValues, SubmitFolderFormFn } from './FolderForm.type'
import Button from '@components/Button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@components/Dialog'
import { TextField } from '@components/Input'
import styled from '@emotion/styled'
import { useEffect } from 'react'

type FolderFormProps = {
  defaultValues?: FolderFormValues
  onSubmit: SubmitFolderFormFn
  submitText: string
  isVisible: boolean
  changeVisible: (value: boolean) => void
}

export function FolderForm({
  defaultValues = initialFolderFormValues,
  submitText,
  isVisible,
  changeVisible,
  onSubmit,
}: FolderFormProps) {
  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: zodResolver(folderSchema),
  })

  const { errors, isSubmitting } = formState

  useEffect(() => {
    !isVisible && reset()
  }, [isVisible, reset])

  return (
    <Dialog open={isVisible} onOpenChange={changeVisible}>
      <DialogContent maxWidth={400}>
        <StyledDialogHeader>
          <DialogTitle>Tạo thư mục</DialogTitle>
        </StyledDialogHeader>
        <form>
          <TextField
            {...register('folder_name')}
            placeholder='Tên thư mục'
            error={errors.folder_name?.message}
          />
          <DialogFooter>
            <Button isLoading={isSubmitting} onClick={handleSubmit(onSubmit)}>
              {submitText}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const StyledDialogHeader = styled(DialogHeader)({
  marginBottom: '16px',
})
