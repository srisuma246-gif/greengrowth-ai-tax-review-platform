export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'cpa' | 'staff'
  avatarUrl?: string
}
