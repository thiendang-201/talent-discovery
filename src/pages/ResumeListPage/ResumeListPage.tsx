import {
  Container,
  StyledFolders,
  ContentContainer,
  NoFolderSelectedContainer,
} from './ResumeListPage.styled'
import { FileList, ResumeFilter } from '@features/resumeMatcher'
import { useParams } from 'react-router-dom'
import SelectFolderIllustration from '@illustrations/select-folder.svg?react'
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
  const { folderId } = useParams()

  return (
    <Container>
      <StyledFolders />
      {folderId ? (
        <>
          <ContentContainer>
            <ResumeListPageHeader />
            <FileList files={files} />
          </ContentContainer>
          <ResumeFilter />
        </>
      ) : (
        <NoFolderSelectedContainer>
          <SelectFolderIllustration width={300} height={300} />
          <p>Vui lòng chọn một thư mục !!!</p>
        </NoFolderSelectedContainer>
      )}
    </Container>
  )
}
