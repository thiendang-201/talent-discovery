import Axios, { AxiosError } from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
})

axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) return response.data
    return response
  },
  (error: AxiosError | Error) => {
    const isAxiosError = Axios.isAxiosError(error)

    isAxiosError && Promise.reject([error.response?.data, isAxiosError])
    Promise.reject([error, false])
  }
)

export default axios
