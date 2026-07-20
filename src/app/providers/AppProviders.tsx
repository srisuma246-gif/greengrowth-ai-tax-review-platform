import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/context/ThemeProvider'
import { AuthProvider } from '@/features/auth/context/AuthProvider'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>{children}</BrowserRouter>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}
