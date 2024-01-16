import { create } from 'zustand'
import { AuthData, AuthStoreValues } from './authStore.type'

const initialData: AuthData = {
  isLogged: false,
  email: '',
}

export const useAuth = create<AuthStoreValues>(set => ({
  ...initialData,

  localLogin: data => set(data),
  localLogout: () => set(initialData),
}))
