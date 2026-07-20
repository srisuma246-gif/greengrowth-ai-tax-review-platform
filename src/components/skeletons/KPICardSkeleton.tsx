import { Card, CardContent } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Feedback'
export function KPICardSkeleton() {
  return (
    <Card variant="interactive">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <Skeleton variant="text" className="w-28" />
          <Skeleton variant="avatar" />
        </div>
        <Skeleton className="h-9 w-20" />
        <Skeleton variant="text" className="w-36" />
      </CardContent>
    </Card>
  )
}
