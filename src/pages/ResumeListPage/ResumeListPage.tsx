import { Container, StyledFolders, ContentContainer } from './ResumeListPage.styled'
import { FileList, ResumeFilter } from '@features/resumeMatcher'
import { ResumeListPageHeader } from './components'

// mock
const files = [
  {
    id: '1',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '2',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '3',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '4',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '5',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '6',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '7',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '8',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '9',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
]

export default function ResumeListPage() {
  return (
    <Container>
      <StyledFolders />
      <ContentContainer>
        <ResumeListPageHeader />
        <FileList files={files} />
      </ContentContainer>
      <ResumeFilter />
    </Container>
  )
}
