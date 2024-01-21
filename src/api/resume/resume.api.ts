import axios from '../axiosInstant'
import { UploadResumePayload } from './resume.type'

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
