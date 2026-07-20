import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppBreadcrumb } from '@/components/navigation/AppBreadcrumb'
import { AppSidebar } from '@/components/navigation/AppSidebar'
import { Topbar } from '@/components/navigation/Topbar'

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMobileOpen(false), [location.pathname])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    if (mobileOpen) window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])
  return (
    <div className="h-dvh overflow-hidden bg-background">
      <div className="hidden h-full lg:fixed lg:inset-y-0 lg:left-0 lg:flex">
        <AppSidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />
      </div>
      <div
        className="flex h-full flex-col transition-[margin] duration-200 lg:ml-64"
        style={{ marginLeft: collapsed ? '4.5rem' : undefined }}
      >
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <div className="border-b bg-surface px-4 py-3 sm:px-6">
          <AppBreadcrumb />
        </div>
        <main className="min-h-0 flex-1 overflow-y-auto">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/30 lg:hidden"
            onMouseDown={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="h-full"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <AppSidebar
                mobile
                collapsed={false}
                onCollapsedChange={setCollapsed}
                onNavigate={() => setMobileOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
