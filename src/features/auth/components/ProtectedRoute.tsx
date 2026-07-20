import type { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/features/auth/context/useAuth'
import { ROUTES } from '@/utils/routes'
export function ProtectedRoute({ children }: PropsWithChildren) {
  const { authenticated } = useAuth()
  const location = useLocation()
  return authenticated ? (
    children
  ) : (
    <Navigate to={ROUTES.login} replace state={{ from: location }} />
  )
}
