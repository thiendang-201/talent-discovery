import { useResumeFilterStore } from '@features/resumeMatcher'
import { Container, Title } from './FilterValue.styled'

type FilterValueProps = {
  value: string
}

export function FilterValue({ value }: FilterValueProps) {
  const addFilterValue = useResumeFilterStore(state => state.addFilterValue)

  const handleAddFilterValue = () => {
    addFilterValue({ value, required: false })
  }

  return (
    <Container onClick={handleAddFilterValue}>
      <Title>{value}</Title>
    </Container>
  )
}
