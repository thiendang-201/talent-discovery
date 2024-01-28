import { useResume } from '@api/resume'
import { useParams } from 'react-router-dom'
import { Container } from './ResumeDetail.styled'
import { ResumeViewer } from './ResumeViewer'
import { ResumeInfo } from './ResumeInfo'
import { LoaderWrapper } from '@components/LoaderWrapper'

export function ResumeDetail() {
  const { resumeId = '' } = useParams()
  const { data: resume, isLoading } = useResume(resumeId)

  return (
    <LoaderWrapper isLoading={isLoading} isEmpty={!resume} emptyFallback='Không tìm thấy hồ sơ'>
      <Container>
        {resume && (
          <>
            <ResumeViewer fileUrl={resume.resume_url} />
            <ResumeInfo {...resume} />
          </>
        )}
      </Container>
    </LoaderWrapper>
  )
}
