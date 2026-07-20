import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { navigationItems } from '@/components/navigation/navigationConfig'

export function AppBreadcrumb() {
  const { pathname } = useLocation()
  const items = useMemo(() => {
    const match = navigationItems.find((item) => item.href === pathname)
    return match
      ? [
          { label: 'Dashboard', href: '/dashboard' },
          ...(match.href === '/dashboard' ? [] : [{ label: match.label }]),
        ]
      : [{ label: 'Dashboard', href: '/dashboard' }]
  }, [pathname])
  return <Breadcrumb items={items} />
}
