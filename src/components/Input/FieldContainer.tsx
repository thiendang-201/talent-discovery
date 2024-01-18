import { PropsWithChildren } from 'react'
import { Container, ErrorText, Label } from './FieldContainer.styled'

export type FieldContainerProps = {
  label?: string
  error?: string
}

export function FieldContainer({ label, error, children }: PropsWithChildren<FieldContainerProps>) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      {children}
      <ErrorText>{error}</ErrorText>
    </Container>
  )
}
