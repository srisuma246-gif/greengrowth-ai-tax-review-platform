export const ROUTES = {
  login: '/login',
  onboarding: '/onboarding',
  dashboard: '/dashboard',
  returns: '/returns',
  review: '/review',
  clients: '/clients',
  documents: '/documents',
  notifications: '/notifications',
  settings: '/settings',
} as const

export function reviewWorkspaceRoute(returnId: string): string {
  return `/review/${returnId}`
}
