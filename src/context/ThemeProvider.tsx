import { useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

type Theme = 'light' | 'dark' | 'system'
const storageKey = 'greengrowth-theme'

function resolveTheme(theme: Theme): 'light' | 'dark' {
  return theme === 'system'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    : theme
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey)
    return storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
      ? storedTheme
      : 'system'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolveTheme(theme) === 'dark')
    localStorage.setItem(storageKey, theme)
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
