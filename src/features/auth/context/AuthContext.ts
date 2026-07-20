import { createContext } from 'react'
import type { AuthCredentials, ReviewerProfile } from '@/features/auth/types'
export interface AuthContextValue {
  authenticated: boolean
  reviewer: ReviewerProfile | null
  login: (credentials: AuthCredentials, remember: boolean) => boolean
  loginAsDemo: (remember?: boolean) => void
  logout: () => void
}
export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
