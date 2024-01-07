import { BiFilterAlt } from 'react-icons/bi'
import { Container, Heading } from './ResumeFilter.styled'
import { ResumeFilterProps } from './ResumeFilter.type'

export function ResumeFilter({ className }: ResumeFilterProps) {
  return (
    <Container className={className}>
      <Heading>
        <BiFilterAlt size={20} /> Bộ lọc
      </Heading>
    </Container>
  )
}
