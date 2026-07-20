import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Checkbox } from '@/components/ui/FormControls'
import { Input } from '@/components/ui/Input'
import { useAuth } from '@/features/auth/context/useAuth'
import { ROUTES } from '@/utils/routes'

interface LoginLocationState {
  from?: { pathname?: string }
}
export function LoginPage() {
  const { authenticated, login, loginAsDemo } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const destination =
    (location.state as LoginLocationState | null)?.from?.pathname ?? ROUTES.dashboard
  if (authenticated) return <Navigate to={ROUTES.dashboard} replace />
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (!password) {
      setError('Enter your password.')
      return
    }
    setLoading(true)
    window.setTimeout(() => {
      if (!login({ email, password }, remember)) {
        setError('Incorrect email or password.')
        setLoading(false)
        return
      }
      navigate(destination, { replace: true })
    }, 450)
  }
  const demo = () => {
    loginAsDemo(remember)
    navigate(ROUTES.dashboard, { replace: true })
  }
  return (
    <main className="grid min-h-dvh place-items-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md bg-primary font-semibold text-primary-foreground">
              G
            </span>
            <div>
              <p className="text-h3">GreenGrowth AI</p>
              <p className="text-body-sm text-muted-foreground">Tax Review Workspace</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={submit} noValidate>
            <div className="space-y-2">
              <label htmlFor="email" className="text-label">
                Email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(error)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-label">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={Boolean(error)}
              />
            </div>
            <label className="flex items-center gap-2 text-body">
              <Checkbox
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              Remember Me
            </label>
            {error && (
              <p role="alert" className="text-body-sm text-error">
                {error}
              </p>
            )}
            <Button type="submit" fullWidth loading={loading}>
              Sign In
            </Button>
            <Button type="button" variant="outline" fullWidth onClick={demo}>
              Continue as Demo Reviewer
            </Button>
            <p className="text-center text-body-sm text-muted-foreground">
              Use reviewer@greengrowth.com · password123
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
