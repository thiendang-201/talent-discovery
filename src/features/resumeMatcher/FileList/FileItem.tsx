import { useRef } from 'react'
import {
  Body,
  BodyLeft,
  BodyRight,
  Container,
  Header,
  JobTitle,
  Name,
  PreviewCV,
} from './FileItem.styled'
import { FileMenu } from './FileMenu'

export function FileItem({ candidateName, jobTitle }: FileItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const onMenuOpenChange = () => {
    containerRef.current?.classList.toggle('menu-opened')
  }

  return (
    <Container ref={containerRef}>
      <Header>
        <PreviewCV src='https://cdn1.vieclam24h.vn/images/assets/img/cv33-1D1B21.png' />
      </Header>
      <Body>
        <BodyLeft>
          <Name>{candidateName}</Name>
          <JobTitle>{jobTitle}</JobTitle>
        </BodyLeft>
        <BodyRight>
          <FileMenu onMenuOpenChange={onMenuOpenChange} />
        </BodyRight>
      </Body>
    </Container>
  )
}

export type FileItemProps = {
  id: string
  candidateName: string
  jobTitle: string
}
