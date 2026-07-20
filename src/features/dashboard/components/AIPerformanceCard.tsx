import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { AIPerformance } from '@/features/dashboard/types'
const metrics: Array<{
  key: keyof Omit<AIPerformance, 'averageConfidence'>
  label: string
  className: string
}> = [
  { key: 'autoApproved', label: 'Auto-approved', className: 'bg-success' },
  { key: 'manualReview', label: 'Manual Review', className: 'bg-warning' },
  { key: 'rejected', label: 'Rejected', className: 'bg-error' },
]
export function AIPerformanceCard({ performance }: { performance: AIPerformance }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">AI Performance</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-body-sm text-muted-foreground">Average Confidence</p>
          <p className="text-3xl font-semibold text-ai-primary">{performance.averageConfidence}%</p>
        </div>
        {metrics.map((metric) => (
          <div key={metric.key}>
            <div className="flex justify-between text-body-sm">
              <span>{metric.label}</span>
              <span className="font-medium">{performance[metric.key]}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-pill bg-secondary">
              <div
                className={`h-full rounded-pill ${metric.className}`}
                style={{ width: `${performance[metric.key]}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
