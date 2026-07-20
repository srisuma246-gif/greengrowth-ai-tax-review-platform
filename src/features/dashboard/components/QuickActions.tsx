import { Bot, FileSearch, Upload, Users } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { QuickAction } from '@/features/dashboard/types'
const icons = { startReview: FileSearch, upload: Upload, clients: Users, aiAssistant: Bot }
export function QuickActions({ actions }: { actions: QuickAction[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Quick Actions</h2>
      </CardHeader>
      <CardContent className="grid gap-2">
        {actions.map((action) => {
          const Icon = icons[action.iconName]
          return (
            <button
              key={action.id}
              type="button"
              className="flex items-center gap-3 rounded-md p-3 text-left transition-colors hover:bg-secondary"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-label">{action.title}</span>
                <span className="block text-body-sm text-muted-foreground">
                  {action.description}
                </span>
              </span>
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
