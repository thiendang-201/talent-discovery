import {
  Container,
  StyledFolders,
  ContentContainer,
  NoFolderSelectedContainer,
} from './ResumeListPage.styled'
import { FileList, ResumeFilter } from '@features/resumeMatcher'
import SelectFolderIllustration from '@illustrations/select-folder.svg?react'
import { ResumeListPageHeader } from './components'
import { useParams } from 'react-router-dom'

export default function ResumeListPage() {
  const { folderId } = useParams()

  return (
    <Container>
      <StyledFolders />
      {folderId ? (
        <>
          <ContentContainer>
            <ResumeListPageHeader />
            <FileList />
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
