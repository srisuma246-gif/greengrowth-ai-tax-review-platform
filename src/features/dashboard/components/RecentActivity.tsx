import { Avatar } from '@/components/ui/Avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { ActivityItem } from '@/features/dashboard/types'
const dotTones = {
  success: 'bg-success',
  error: 'bg-error',
  ai: 'bg-ai-primary',
  neutral: 'bg-muted-foreground',
}
export function RecentActivity({ activity }: { activity: ActivityItem[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Recent Activity</h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {activity.map((item) => (
            <li key={item.id} className="flex gap-3">
              <div className="relative">
                <Avatar fallback={item.actor.initials} alt={item.actor.name} size="sm" />
                <span
                  className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-pill border-2 border-card ${dotTones[item.tone]}`}
                />
              </div>
              <div>
                <p className="text-body">
                  <span className="font-medium">{item.actor.name}</span> {item.action}
                </p>
                <time className="text-body-sm text-muted-foreground">{item.timestamp}</time>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
