import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Feedback'
function WorkspacePanel({ rows = 4 }: { rows?: number }) {
  return (
    <Card>
      <CardHeader>
        <Skeleton variant="text" className="w-40" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: rows }, (_, index) => (
          <Skeleton key={index} variant="text" />
        ))}
      </CardContent>
    </Card>
  )
}
export function ReviewWorkspaceSkeleton() {
  return (
    <div aria-label="Loading review workspace" aria-busy="true" className="space-y-8">
      <div className="space-y-3">
        <Skeleton variant="text" className="w-48" />
        <Skeleton className="h-9 w-32" />
        <Skeleton variant="text" className="w-72" />
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,65fr)_minmax(18rem,35fr)]">
        <section className="space-y-6">
          <WorkspacePanel rows={6} />
          <WorkspacePanel rows={4} />
          <WorkspacePanel rows={5} />
          <WorkspacePanel rows={4} />
        </section>
        <aside className="space-y-6">
          <WorkspacePanel rows={6} />
          <WorkspacePanel rows={4} />
          <WorkspacePanel rows={5} />
          <WorkspacePanel rows={4} />
        </aside>
      </div>
    </div>
  )
}
