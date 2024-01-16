export type AuthData = {
  email: string
  isLogged: boolean
}

export type AuthActions = {
  localLogin: (data: Omit<AuthData, 'isLogged'>) => void
  localLogout: () => void
}

export type AuthStoreValues = AuthData & AuthActions
