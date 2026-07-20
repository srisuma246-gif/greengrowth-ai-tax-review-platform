import { motion } from 'framer-motion'
import { ChevronLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Tooltip } from '@/components/ui/Overlay'
import {
  primaryNavigation,
  secondaryNavigation,
  type NavigationItem,
} from '@/components/navigation/navigationConfig'
import { cn } from '@/utils/helpers'

interface AppSidebarProps {
  collapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
  mobile?: boolean
  onNavigate?: () => void
}
function NavigationLink({
  item,
  collapsed,
  onNavigate,
}: {
  item: NavigationItem
  collapsed: boolean
  onNavigate?: () => void
}) {
  const Icon = item.icon
  const link = (
    <NavLink
      to={item.href}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'flex h-10 items-center gap-3 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
          isActive && 'bg-secondary text-foreground font-medium',
          collapsed && 'justify-center px-0',
        )
      }
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className={cn('truncate', collapsed && 'sr-only')}>{item.label}</span>
    </NavLink>
  )
  return collapsed ? <Tooltip content={item.label}>{link}</Tooltip> : link
}
export function AppSidebar({
  collapsed,
  onCollapsedChange,
  mobile = false,
  onNavigate,
}: AppSidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: mobile ? '18rem' : collapsed ? '4.5rem' : '16rem' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn('flex h-full flex-col border-r bg-surface p-3', mobile && 'w-72')}
      aria-label="Primary navigation"
    >
      <div className={cn('flex h-10 items-center gap-3 px-2', collapsed && 'justify-center px-0')}>
        <div className="grid size-7 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
          G
        </div>
        <span className={cn('text-sm font-semibold tracking-tight', collapsed && 'sr-only')}>
          GreenGrowth AI
        </span>
      </div>
      <nav className="mt-7 flex flex-1 flex-col gap-1">
        <p
          className={cn(
            'px-3 pb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground',
            collapsed && 'sr-only',
          )}
        >
          Workspace
        </p>
        {primaryNavigation.map((item) => (
          <NavigationLink
            key={item.href}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
        <div className="my-4 border-t" />
        <p
          className={cn(
            'px-3 pb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground',
            collapsed && 'sr-only',
          )}
        >
          System
        </p>
        {secondaryNavigation.map((item) => (
          <NavigationLink
            key={item.href}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
      {!mobile && (
        <Button
          variant="ghost"
          size="icon"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => onCollapsedChange(!collapsed)}
        >
          {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
        </Button>
      )}
      {mobile && (
        <Button
          variant="ghost"
          fullWidth
          onClick={onNavigate}
          leftIcon={<ChevronLeft className="size-4" />}
        >
          Close navigation
        </Button>
      )}
    </motion.aside>
  )
}
