import { ResumeFilterValue, useResumeFilterStore } from '@features/resumeMatcher'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { MdClear } from 'react-icons/md'
import { Title, ToggleRequiredButton, LeftBox, Container } from './FilterValue.styled'
import { IconButton } from '@components/Button'

export type SelectedFilterValueProps = {
  index: number
} & ResumeFilterValue

export function SelectedFilterValue({ value, isRequired, index }: SelectedFilterValueProps) {
  const toggleFilterValueRequired = useResumeFilterStore(state => state.toggleFilterValueRequired)
  const removeFilterValue = useResumeFilterStore(state => state.removeFilterValue)

  const handleToggleRequired = () => {
    toggleFilterValueRequired(index)
  }

  const handleRemoveFilterValue = () => {
    removeFilterValue(value)
  }

  return (
    <Container isSelected isRequired={isRequired}>
      <LeftBox>
        <Title>{value}</Title>
        <ToggleRequiredButton isRequired={isRequired} onClick={handleToggleRequired}>
          <CgArrowsExchangeAltV size={16} />
          <span>{isRequired ? 'Bắt buộc' : 'Tùy chọn'}</span>
        </ToggleRequiredButton>
      </LeftBox>
      <IconButton size='small' variant='clear' color='none' onClick={handleRemoveFilterValue}>
        <MdClear size={16} />
      </IconButton>
    </Container>
  )
}
