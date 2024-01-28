import Axios, { AxiosError } from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 20 * 5,
})

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    const isAxiosError = Axios.isAxiosError(error)

    if (!isAxiosError) {
      return
    }

    throw error.response?.data
  }
)

export default axios
