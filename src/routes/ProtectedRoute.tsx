import { useAuth } from '@features/auth/stores'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
  redirectPath?: string
}

export function ProtectedRoute({
  redirectPath = '/login',
  children,
}: PropsWithChildren<ProtectedRouteProps>) {
  const isLogged = useAuth(state => state.isLogged)

  return isLogged ? children : <Navigate to={redirectPath} />
}
