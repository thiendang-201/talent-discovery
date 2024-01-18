import { API_ERROR_TYPES } from '@/constants'

export type APIError<TDATA = null> = {
  data: TDATA
  message: string
  status_code: number
  type: API_ERROR_TYPES
}
