import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { AlternativeRecommendation } from '@/features/review/types'
export function AlternativeRecommendationCard({
  recommendation,
}: {
  recommendation: AlternativeRecommendation
}) {
  return (
    <Card>
      <CardHeader>
        <p className="text-body-sm text-muted-foreground">Alternative Recommendation</p>
        <h2 className="text-h3">{recommendation.title}</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-body-sm text-muted-foreground">Confidence</p>
          <p className="text-2xl font-semibold text-warning">{recommendation.confidence}%</p>
        </div>
        <div>
          <p className="text-body-sm text-muted-foreground">Reason</p>
          <p className="mt-1 text-body">{recommendation.reason}</p>
        </div>
        <div>
          <p className="text-body-sm text-muted-foreground">Potential Impact</p>
          <p className="mt-1 text-label">{recommendation.potentialImpact}</p>
        </div>
      </CardContent>
    </Card>
  )
}
