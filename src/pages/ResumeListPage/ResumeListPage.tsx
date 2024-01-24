import {
  Container,
  StyledFolders,
  ContentContainer,
  NoFolderSelectedContainer,
  NoResumeFounded,
} from './ResumeListPage.styled'
import { FileList, ResumeFilter, useResumeFilterStore } from '@features/resumeMatcher'
import { useParams } from 'react-router-dom'
import SelectFolderIllustration from '@illustrations/select-folder.svg?react'
import { ResumeListPageHeader } from './components'
import { useSearchResume } from '@api/resume'
import { FILTER_CATEGORIES } from '@/constants'

export default function ResumeListPage() {
  const { folderId = '' } = useParams()
  const filter = useResumeFilterStore(state => state.filterMap)
  const { data: resumes = [] } = useSearchResume({
    folder_id: folderId,
    job_title: filter.get(FILTER_CATEGORIES.JOB_TITLE)?.at(0)?.value ?? '',
    awards: filter.get(FILTER_CATEGORIES.AWARD) ?? [],
    certificates: filter.get(FILTER_CATEGORIES.CERTIFICATION) ?? [],
    educations: filter.get(FILTER_CATEGORIES.EDUCATION) ?? [],
    languages: filter.get(FILTER_CATEGORIES.LANGUAGE) ?? [],
    skills: filter.get(FILTER_CATEGORIES.SKILL) ?? [],
  })

  return (
    <Container>
      <StyledFolders />
      {folderId ? (
        <>
          <ContentContainer>
            <ResumeListPageHeader />
            {resumes.length ? (
              <FileList files={resumes} />
            ) : (
              <NoResumeFounded>Không có hồ sơ nào!</NoResumeFounded>
            )}
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
