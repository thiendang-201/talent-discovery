import { create } from 'zustand'
import { AuthData, AuthStoreValues } from './authStore.type'

const initialData: AuthData = {
  isLogged: true,
  email: '',
}

export const useAuth = create<AuthStoreValues>(set => ({
  ...initialData,

  localLogin: data => set({ ...data, isLogged: true }),
  localLogout: () => set(initialData),
}))
