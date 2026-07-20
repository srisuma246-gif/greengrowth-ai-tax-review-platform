import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Feedback'
export function ReviewQueueSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton variant="text" className="w-32" />
        <Skeleton variant="text" className="mt-2 w-56" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Skeleton variant="button" className="w-64" />
          <Skeleton variant="button" />
          <Skeleton variant="button" />
          <Skeleton variant="button" />
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 border-b p-4 last:border-0 sm:grid-cols-7"
            >
              {Array.from({ length: 7 }, (_, cell) => (
                <Skeleton key={cell} variant="text" />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
