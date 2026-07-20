import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Button } from '@/components/ui/Button'
import type { ReviewSummary } from '@/features/review/types'
import { ROUTES } from '@/utils/routes'
const statusVariants = {
  pending: 'pending',
  'in-review': 'status',
  completed: 'approved',
  blocked: 'error',
} as const
const priorityClasses = {
  high: 'bg-error/15 text-error',
  medium: 'bg-warning/15 text-warning',
  low: 'bg-success/15 text-success',
}
export function ReviewWorkspaceHeader({
  summary,
  returnId,
}: {
  summary: ReviewSummary
  returnId: string
}) {
  return (
    <header className="space-y-5">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: ROUTES.dashboard },
          { label: 'AI Review', href: ROUTES.review },
          { label: returnId },
        ]}
      />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Button asChild variant="link" size="sm" className="mb-3 px-0">
            <Link to={ROUTES.dashboard}>
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-h1">{returnId}</h1>
          <p className="mt-1 text-body-lg text-muted-foreground">
            {summary.clientName} · {summary.taxYear} {summary.returnType} Return
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant={statusVariants[summary.status]}>
              {summary.status.replace('-', ' ')}
            </Badge>
            <Badge className={priorityClasses[summary.priority]}>{summary.priority} priority</Badge>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3">
          <Avatar fallback={summary.assignedReviewer.initials} size="sm" status="online" />
          <div>
            <p className="text-body-sm text-muted-foreground">Assigned reviewer</p>
            <p className="text-label">{summary.assignedReviewer.name}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
