import { Bell, Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { SearchInput } from '@/components/ui/Input'
import { useTheme } from '@/context/useTheme'
import { useAuth } from '@/features/auth/context/useAuth'
import { ROUTES } from '@/utils/routes'

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, setTheme } = useTheme()
  const { reviewer, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = theme === 'dark'
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b bg-surface px-4 sm:px-6">
      <Button
        variant="icon"
        size="icon"
        className="lg:hidden"
        aria-label="Open navigation"
        onClick={onMenuClick}
      >
        <Menu className="size-5" />
      </Button>
      <p className="hidden text-sm font-semibold sm:block">GreenGrowth AI Workspace</p>
      <div className="ml-auto hidden w-full max-w-md sm:block">
        <SearchInput
          aria-label="Search workspace"
          placeholder="Search clients, returns, or documents..."
        />
      </div>
      <Button
        variant="icon"
        size="icon"
        aria-label="Toggle color theme"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>
      <Button variant="icon" size="icon" aria-label="Notifications" className="relative">
        <Bell className="size-4" />
        <Badge
          variant="error"
          className="absolute -right-1 -top-1 min-w-4 justify-center px-1 py-0 text-[10px]"
        >
          3
        </Badge>
      </Button>
      <div className="relative">
        <Button
          variant="icon"
          size="icon"
          aria-label="Open user menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Avatar
            fallback={reviewer?.name ?? 'GG'}
            alt={reviewer?.name ?? 'Reviewer'}
            size="sm"
            status="online"
          />
        </Button>
        {menuOpen && (
          <div
            role="menu"
            className="absolute right-0 z-30 mt-2 w-44 rounded-md border bg-card p-1 shadow-dropdown"
          >
            <div className="px-3 py-2">
              <p className="text-xs font-medium">{reviewer?.name}</p>
              <p className="text-xs text-muted-foreground">{reviewer?.role}</p>
            </div>
            {['Profile', 'Settings'].map((item) => (
              <button
                key={item}
                role="menuitem"
                type="button"
                className="w-full rounded px-3 py-2 text-left text-sm hover:bg-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            <button
              role="menuitem"
              type="button"
              className="w-full rounded px-3 py-2 text-left text-sm hover:bg-secondary"
              onClick={() => {
                setMenuOpen(false)
                logout()
                navigate(ROUTES.login, { replace: true })
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
