import { z } from 'zod'
import { LoginFormValues } from './LoginForm.type'

export const loginSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không đúng định dạng'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
})

export const inititalLoginValues: LoginFormValues = {
  email: '',
  password: '',
}
