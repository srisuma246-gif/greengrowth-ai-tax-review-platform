import { KPICardSkeleton } from '@/components/skeletons/KPICardSkeleton'
import { ReviewQueueSkeleton } from '@/components/skeletons/ReviewQueueSkeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Feedback'
function PanelSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <Card>
      <CardHeader>
        <Skeleton variant="text" className="w-36" />
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: rows }, (_, index) => (
          <Skeleton key={index} variant="text" />
        ))}
      </CardContent>
    </Card>
  )
}
export function DashboardSkeleton() {
  return (
    <div aria-label="Loading dashboard" aria-busy="true" className="space-y-8">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <KPICardSkeleton key={index} />
        ))}
      </div>
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <PanelSkeleton key={index} rows={2} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <PanelSkeleton rows={5} />
        <PanelSkeleton rows={5} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,7fr)_minmax(18rem,3fr)]">
        <ReviewQueueSkeleton />
        <div className="grid gap-6">
          <PanelSkeleton rows={4} />
          <PanelSkeleton rows={4} />
          <PanelSkeleton rows={4} />
        </div>
      </div>
      <PanelSkeleton rows={5} />
    </div>
  )
}
