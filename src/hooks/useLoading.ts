import { useCallback, useEffect, useState } from 'react'

export function useLoading(initialDelay = 0) {
  const [isLoading, setIsLoading] = useState(initialDelay > 0)
  useEffect(() => {
    if (initialDelay <= 0) return undefined
    const timeout = window.setTimeout(() => setIsLoading(false), initialDelay)
    return () => window.clearTimeout(timeout)
  }, [initialDelay])
  const run = useCallback(async <T>(operation: () => Promise<T>): Promise<T> => {
    setIsLoading(true)
    try {
      return await operation()
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, run }
}
