import { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { AuthContext } from '@/features/auth/context/AuthContext'
import type { ReviewerProfile } from '@/features/auth/types'
const authKey = 'greengrowth-authenticated'
const profileKey = 'greengrowth-reviewer'
const demoReviewer: ReviewerProfile = {
  name: 'Sarah Chen',
  role: 'Senior Tax Reviewer',
  email: 'reviewer@greengrowth.com',
}
function readStoredAuth(): { authenticated: boolean; reviewer: ReviewerProfile | null } {
  for (const storage of [sessionStorage, localStorage]) {
    if (storage.getItem(authKey) === 'true') {
      const profile = storage.getItem(profileKey)
      if (profile) {
        try {
          const parsed: unknown = JSON.parse(profile)
          if (
            typeof parsed === 'object' &&
            parsed !== null &&
            'name' in parsed &&
            'role' in parsed &&
            'email' in parsed &&
            typeof parsed.name === 'string' &&
            typeof parsed.role === 'string' &&
            typeof parsed.email === 'string'
          )
            return { authenticated: true, reviewer: parsed as ReviewerProfile }
        } catch {
          continue
        }
      }
    }
  }
  return { authenticated: false, reviewer: null }
}
export function AuthProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(readStoredAuth)
  const persist = (remember: boolean) => {
    const storage = remember ? localStorage : sessionStorage
    const other = remember ? sessionStorage : localStorage
    other.removeItem(authKey)
    other.removeItem(profileKey)
    storage.setItem(authKey, 'true')
    storage.setItem(profileKey, JSON.stringify(demoReviewer))
    setState({ authenticated: true, reviewer: demoReviewer })
  }
  const login = (credentials: { email: string; password: string }, remember: boolean) => {
    if (credentials.email !== demoReviewer.email || credentials.password !== 'password123')
      return false
    persist(remember)
    return true
  }
  const loginAsDemo = (remember = false) => persist(remember)
  const logout = () => {
    sessionStorage.removeItem(authKey)
    sessionStorage.removeItem(profileKey)
    localStorage.removeItem(authKey)
    localStorage.removeItem(profileKey)
    setState({ authenticated: false, reviewer: null })
  }
  return (
    <AuthContext.Provider value={{ ...state, login, loginAsDemo, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
