import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { ReviewSummary } from '@/features/review/types'
export function ReturnSummaryCard({ summary }: { summary: ReviewSummary }) {
  const fields = [
    { label: 'Client', value: summary.clientName },
    { label: 'Tax Year', value: summary.taxYear },
    { label: 'Return Type', value: summary.returnType },
    { label: 'Assigned Reviewer', value: summary.assignedReviewer.name },
    { label: 'Status', value: 'Pending Review' },
    { label: 'Documents Submitted', value: summary.documentsSubmitted },
    { label: 'Estimated Refund', value: summary.estimatedRefund },
  ]
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Tax Return Summary</h2>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.label}>
              <dt className="text-body-sm text-muted-foreground">{field.label}</dt>
              <dd className="mt-1 text-label">{field.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
