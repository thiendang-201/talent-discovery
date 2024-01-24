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

export function FileItem({ candidateName, jobTitle, thumbnail }: FileItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const onMenuOpenChange = () => {
    containerRef.current?.classList.toggle('menu-opened')
  }

  return (
    <Container ref={containerRef}>
      <Header>
        <PreviewCV src={thumbnail} />
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
  thumbnail: string
}
