import { FILTER_CATEGORIES } from '@/constants'
import { APIError } from '@api/common.type'
import { UseMutationOptions } from '@tanstack/react-query'
import { AxiosProgressEvent } from 'axios'

export type UploadResumePayload = {
  id: string
  file: File
  folder_id: string
  onUploadProgress: UploadProgessFn
}

export type UploadProgessFn = (progessEvt: AxiosProgressEvent) => void

export type UploadResumeOptions = UseMutationOptions<void, APIError, UploadResumePayload, unknown>

export type OnUploadSuccessFn = Exclude<UploadResumeOptions['onSuccess'], undefined>

export type OnUploadErrorFn = Exclude<UploadResumeOptions['onError'], undefined>

export type GetKeywordPayload = {
  keyword_type: FILTER_CATEGORIES
  search_value: string
}

export type KeywordData = {
  keyword_id: string
  keyword_value: string
}

export type KeywordResponse = KeywordData[]

export type ResumeData = {
  resume_id: string
  full_name: string
  job_title: string
  resume_thumbnail_url: string
}

export type SearchOption = {
  value: string
  required: boolean
}

export type SearchResumesPayload = {
  folder_id: string
  job_title: string
  awards: SearchOption[]
  certificates: SearchOption[]
  educations: SearchOption[]
  languages: SearchOption[]
  skills: SearchOption[]
}

export type ResumeDetailData = {
  resume_id: string
  resume_thumbnail_url: string
  job_title: string
  full_name: string
  email: string
  phone_number: string
  address: string
  resume_file_path: string
  resume_url: string
  resume_skills: ResumeSkill[]
  resume_references: ResumeReference[]
  resume_awards: ResumeAward[]
  resume_certifications: ResumeCertification[]
  resume_educations: ResumeEducation[]
  resume_languages: ResumeLanguage[]
  resume_project_experiences: ResumeProjectExperience[]
  resume_work_experiences: ResumeWorkExperience[]
}

export type ResumeWorkExperience = {
  resume_work_experience_id: string
  job_title: string
  job_sumary: string
  company_name: string
  start_date: string
  end_date: string
}

export type ResumeLanguage = {
  resume_language_id: string
  language_name: string
}

export type ResumeCertification = {
  resume_certification_id: string
  title: string
  date: string
}

export type ResumeAward = {
  resume_award_id: string
  title: string
  date: string
}

export type ResumeSkill = {
  resume_skill_id: string
  skill_name: string
}

export type ResumeReference = {
  reference_id: string
  reference_link: string
}

export type ResumeEducation = {
  resume_education_id: string
  name: string
  start_date: string
  end_date: string
  major: string
  gpa: number
}

export type ResumeProjectExperience = {
  resume_project_experiences_id: string
  project_name: string
  project_description: string
  project_technologies: string
  responsibilities: string
  repository_url: string
  demo_or_live_url: string
  start_date: string
  end_date: string | null
  resume_id: string
}
