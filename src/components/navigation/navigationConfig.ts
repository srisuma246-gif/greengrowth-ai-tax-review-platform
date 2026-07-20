import type { LucideIcon } from 'lucide-react'
import { Bell, Bot, FileText, FolderOpen, LayoutDashboard, Settings, Users } from 'lucide-react'
import { ROUTES } from '@/utils/routes'

export interface NavigationItem {
  label: string
  href: string
  icon: LucideIcon
  description: string
}
export const primaryNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: ROUTES.dashboard,
    icon: LayoutDashboard,
    description: 'Your workspace overview',
  },
  { label: 'Returns', href: ROUTES.returns, icon: FileText, description: 'Tax return workspace' },
  {
    label: 'AI Review',
    href: ROUTES.review,
    icon: Bot,
    description: 'AI-assisted review workspace',
  },
  { label: 'Clients', href: ROUTES.clients, icon: Users, description: 'Client workspace' },
  {
    label: 'Documents',
    href: ROUTES.documents,
    icon: FolderOpen,
    description: 'Document workspace',
  },
]
export const secondaryNavigation: NavigationItem[] = [
  {
    label: 'Notifications',
    href: ROUTES.notifications,
    icon: Bell,
    description: 'Workspace notifications',
  },
  { label: 'Settings', href: ROUTES.settings, icon: Settings, description: 'Workspace settings' },
]
export const navigationItems = [...primaryNavigation, ...secondaryNavigation]
