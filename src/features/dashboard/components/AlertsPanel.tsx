import { AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { DashboardAlert } from '@/features/dashboard/types'
const variants = { high: 'error', medium: 'warning', low: 'success' } as const
export function AlertsPanel({ alerts }: { alerts: DashboardAlert[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Alerts</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li key={alert.id} className="flex gap-3">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-body font-medium">{alert.title}</p>
                <p className="text-body-sm text-muted-foreground">{alert.timestamp}</p>
              </div>
              <Badge variant={variants[alert.severity]}>{alert.severity}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
