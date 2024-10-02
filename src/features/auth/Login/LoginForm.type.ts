import { z } from 'zod'
import { loginSchema } from './LoginForm.constant'
import { SubmitHandler } from 'react-hook-form'

export type LoginFormValues = z.infer<typeof loginSchema>

export type LoginSubmitFn = SubmitHandler<LoginFormValues>
