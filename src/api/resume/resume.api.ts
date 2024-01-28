import axios from '../axiosInstant'
import {
  GetKeywordPayload,
  KeywordResponse,
  ResumeData,
  ResumeDetailData,
  SearchResumesPayload,
  UploadResumePayload,
} from './resume.type'

export async function uploadResume({ file, folder_id, onUploadProgress }: UploadResumePayload) {
  await axios.post(
    '/resume/upload',
    {
      resume: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: { folder_id },
      onUploadProgress,
      timeout: 1000 * 60 * 2,
    }
  )
}

export async function getKeywords(params: GetKeywordPayload) {
  const rs = await axios.get<KeywordResponse>('/resume/keywords', { params })
  return rs.data
}

export async function searchResumes(payload: SearchResumesPayload) {
  const rs = await axios.post<ResumeData[]>('/resume/search', payload)
  return rs.data
}

export async function getResume(resume_id: string) {
  const rs = await axios.get<ResumeDetailData>('/resume/get_resume', { params: { resume_id } })
  return rs.data
}

export async function removeResume(resume_id: string) {
  await axios.delete('/resume/remove_resume' + resume_id)
}
