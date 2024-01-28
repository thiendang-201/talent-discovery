import { useResumeFilterStore } from '@features/resumeMatcher'
import { Container, Title } from './FilterValue.styled'
import { FILTER_CATEGORIES } from '@/constants'

type FilterValueProps = {
  value: string
}

export function FilterValue({ value }: FilterValueProps) {
  const addFilterValue = useResumeFilterStore(state => state.addFilterValue)
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)

  const handleAddFilterValue = () => {
    addFilterValue({ value, required: currentFilterCategory === FILTER_CATEGORIES.JOB_TITLE })
  }

  return (
    <Container onClick={handleAddFilterValue}>
      <Title>{value}</Title>
    </Container>
  )
}
