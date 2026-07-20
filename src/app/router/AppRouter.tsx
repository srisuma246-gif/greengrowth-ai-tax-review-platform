import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardSkeleton, ReviewWorkspaceSkeleton } from '@/components/skeletons'
import { ProtectedRoute } from '@/features/auth/components/ProtectedRoute'
import { AuthLayout } from '@/app/layouts/AuthLayout'
import { DashboardLayout } from '@/app/layouts/DashboardLayout'
import { MainLayout } from '@/app/layouts/MainLayout'
import { ClientsPage } from '@/pages/clients/ClientsPage'
import { ClientDetailPage } from '@/pages/clients/ClientDetailPage'
import { DocumentsPage } from '@/pages/documents/DocumentsPage'
import { DocumentDetailPage } from '@/pages/documents/DocumentDetailPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { OnboardingPage } from '@/pages/onboarding/OnboardingPage'
import { NotificationsPage } from '@/pages/notifications/NotificationsPage'
import { ReturnsPage } from '@/pages/returns/ReturnsPage'
import { ReviewPage } from '@/pages/review/ReviewPage'
import { SettingsPage } from '@/pages/settings/SettingsPage'
import { ROUTES } from '@/utils/routes'

const DashboardPage = lazy(async () => ({
  default: (await import('@/pages/dashboard/DashboardPage')).DashboardPage,
}))
const ReviewWorkspacePage = lazy(async () => ({
  default: (await import('@/pages/review/ReviewWorkspacePage')).ReviewWorkspacePage,
}))

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.onboarding} element={<OnboardingPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path={ROUTES.dashboard}
            element={
              <Suspense fallback={<DashboardSkeleton />}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route path={ROUTES.returns} element={<ReturnsPage />} />
          <Route path={ROUTES.review} element={<ReviewPage />} />
          <Route
            path="/review/:returnId"
            element={
              <Suspense fallback={<ReviewWorkspaceSkeleton />}>
                <ReviewWorkspacePage />
              </Suspense>
            }
          />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
          <Route path={ROUTES.clients} element={<ClientsPage />} />
          <Route path="/clients/:id" element={<ClientDetailPage />} />
          <Route path={ROUTES.documents} element={<DocumentsPage />} />
          <Route path="/documents/:id" element={<DocumentDetailPage />} />
          <Route path={ROUTES.notifications} element={<NotificationsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.login} replace />} />
    </Routes>
  )
}
