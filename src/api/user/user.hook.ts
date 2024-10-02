import { MUTATION_KEYS } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { login } from './user.api'
import { APIError } from '../common.type'
import { LoginParams } from './user.type'

export function useLogin() {
  return useMutation<void, APIError, LoginParams>({
    mutationKey: [MUTATION_KEYS.LOGIN],
    mutationFn: login,
  })
}
