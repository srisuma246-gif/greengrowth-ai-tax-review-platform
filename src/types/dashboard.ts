export interface DashboardCard {
  id: string
  title: string
  value: string | number
  trend: 'up' | 'down' | 'neutral'
  change: number
}
