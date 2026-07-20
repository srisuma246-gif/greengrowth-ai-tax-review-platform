import { Skeleton } from '@/components/ui/Feedback'
export function EvidenceDrawerSkeleton() {
  return (
    <div aria-label="Loading evidence" aria-busy="true" className="space-y-5">
      <div className="flex items-center gap-3">
        <Skeleton variant="avatar" />
        <div className="space-y-2">
          <Skeleton variant="text" className="w-32" />
          <Skeleton variant="text" className="w-24" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton variant="text" className="w-20" />
            <Skeleton variant="text" />
          </div>
        ))}
      </div>
      <Skeleton variant="card" />
      <Skeleton variant="card" />
    </div>
  )
}
