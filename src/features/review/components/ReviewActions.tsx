import { Check, CircleAlert, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
export function ReviewActions() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      <Button leftIcon={<Check className="size-4" />}>Approve Recommendation</Button>
      <Button variant="outline" leftIcon={<CircleAlert className="size-4" />}>
        Needs Review
      </Button>
      <Button variant="destructive" leftIcon={<X className="size-4" />}>
        Reject Recommendation
      </Button>
    </div>
  )
}
