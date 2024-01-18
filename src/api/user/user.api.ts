import axios from '../axiosInstant'
import { LoginParams } from './user.type'

export async function login(payload: LoginParams) {
  await axios.post('/user/login', payload)
}
