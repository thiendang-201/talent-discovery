import { useForm } from 'react-hook-form'
import { folderSchema, initialFolderFormValues } from './FolderForm.constant'
import { zodResolver } from '@hookform/resolvers/zod'
import { FolderFormValues, SubmitFolderFormFn } from './FolderForm.type'
import Button from '@components/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/Dialog'
import { TextField } from '@components/Input'
import styled from '@emotion/styled'
import { useEffect } from 'react'

type FolderFormProps = {
  defaultValues?: FolderFormValues
  onSubmit: SubmitFolderFormFn
  submitText: string
  heading: string
  isVisible: boolean
  changeVisible: (value: boolean) => void
}

export function FolderForm({
  defaultValues = initialFolderFormValues,
  submitText,
  heading,
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
    isVisible && reset(defaultValues)
  }, [isVisible, defaultValues, reset])

  return (
    <Dialog open={isVisible} onOpenChange={isSubmitting ? undefined : changeVisible}>
      <DialogContent maxSize={400}>
        <StyledDialogHeader>
          <DialogTitle>{heading}</DialogTitle>
        </StyledDialogHeader>
        <form>
          <TextField
            {...register('folder_name')}
            placeholder='Tên thư mục'
            error={errors.folder_name?.message}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button color='slate' variant='soft' disabled={isSubmitting} type='button'>
                Hủy bỏ
              </Button>
            </DialogClose>
            <StyledSubmitButton isLoading={isSubmitting} onClick={handleSubmit(onSubmit)}>
              {submitText}
            </StyledSubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const StyledDialogHeader = styled(DialogHeader)({
  marginBottom: '16px',
})

const StyledSubmitButton = styled(Button)({
  minWidth: '80px',
})
