import Button from '@components/Button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from '@components/Dialog'
import styled from '@emotion/styled'
import { FaTrashAlt } from 'react-icons/fa'

type RemoveDialogProps = {
  isVisible: boolean
  isPending: boolean
  changeVisible: (value: boolean) => void
  heading: string
  removeMsg: string
  onConfirm: () => void
}

export function RemoveDialog({
  heading,
  removeMsg,
  isVisible,
  isPending,
  changeVisible,
  onConfirm,
}: RemoveDialogProps) {
  console.log(isPending)

  return (
    <Dialog open={isVisible} onOpenChange={changeVisible}>
      <StyledContent maxWidth='400px'>
        <StyledIconBox>
          <FaTrashAlt size={70} />
        </StyledIconBox>
        <DialogTitle>{heading}</DialogTitle>
        <p>{removeMsg}</p>
        <DialogFooter>
          <DialogClose asChild disabled={isPending}>
            <Button color='slate' variant='soft' radius='999px'>
              Hủy bỏ
            </Button>
          </DialogClose>
          <Button color='red' onClick={onConfirm} radius='999px' isLoading={isPending}>
            Xác nhận
          </Button>
        </DialogFooter>
      </StyledContent>
    </Dialog>
  )
}

const StyledContent = styled(DialogContent)({
  justifyContent: 'center',
  borderRadius: '20px',
  padding: '32px',
  gap: '20px',

  'h2, p': {
    textAlign: 'center',
  },

  button: {
    padding: '10px 20px',
    minWidth: '100px',
  },

  [String(DialogFooter)]: {
    justifyContent: 'center',
  },
})

const StyledIconBox = styled.div(({ theme }) => ({
  width: '120px',
  height: '120px',
  borderRadius: '999px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.slate3,
  color: theme.colors.slate9,
  marginInline: 'auto',
}))
