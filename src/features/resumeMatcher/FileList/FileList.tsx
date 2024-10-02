import { FileItem } from './FileItem'
import { GridView } from './FileList.styled'
import { useResumeFilterStore } from '../stores'
import { useParams } from 'react-router-dom'
import { useSearchResume } from '@api/resume'
import { FILTER_CATEGORIES } from '@/constants'
import { LoaderWrapper } from '@components/LoaderWrapper'

export function FileList() {
  const { folderId = '' } = useParams()
  const filter = useResumeFilterStore(state => state.filterMap)
  const { data: resumes = [], isLoading } = useSearchResume({
    folder_id: folderId,
    job_title: filter.get(FILTER_CATEGORIES.JOB_TITLE)?.at(0)?.value ?? '',
    awards: filter.get(FILTER_CATEGORIES.AWARD) ?? [],
    certificates: filter.get(FILTER_CATEGORIES.CERTIFICATION) ?? [],
    educations: filter.get(FILTER_CATEGORIES.EDUCATION) ?? [],
    languages: filter.get(FILTER_CATEGORIES.LANGUAGE) ?? [],
    skills: filter.get(FILTER_CATEGORIES.SKILL) ?? [],
  })

  return (
    <LoaderWrapper isLoading={isLoading} isEmpty={resumes.length === 0}>
      <GridView>
        {resumes.map(file => (
          <FileItem
            key={file.resume_id}
            candidateName={file.full_name}
            jobTitle={file.job_title}
            id={file.resume_id}
            thumbnail={file.resume_thumbnail_url}
          />
        ))}
      </GridView>
    </LoaderWrapper>
  )
}
