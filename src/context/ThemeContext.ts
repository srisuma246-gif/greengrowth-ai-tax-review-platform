import { createContext } from 'react'

interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
