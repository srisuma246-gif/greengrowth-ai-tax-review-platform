import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { ConfidenceFactor } from '@/features/review/types'
export function ConfidenceFactorsCard({
  factors,
  overallConfidence,
}: {
  factors: ConfidenceFactor[]
  overallConfidence: number
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Confidence Factors</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {factors.map((factor) => (
          <div key={factor.id}>
            <div className="flex justify-between gap-4 text-body-sm">
              <span>{factor.label}</span>
              <span className="font-medium">{factor.weight}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-pill bg-secondary">
              <div
                className="h-full rounded-pill bg-ai-primary"
                style={{ width: `${factor.weight}%` }}
              />
            </div>
            <p className="mt-1 text-body-sm text-muted-foreground">{factor.description}</p>
          </div>
        ))}
        <div className="flex items-end justify-between border-t pt-4">
          <p className="text-label">Overall Confidence</p>
          <p className="text-2xl font-semibold text-ai-primary">{overallConfidence}%</p>
        </div>
      </CardContent>
    </Card>
  )
}
