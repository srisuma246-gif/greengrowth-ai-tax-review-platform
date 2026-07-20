import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import type { Evidence, Recommendation } from '@/features/review/types'
import { EvidenceCard } from '@/features/review/components/EvidenceCard'
import { ReviewActions } from '@/features/review/components/ReviewActions'
const confidenceTone = (confidence: number) =>
  confidence >= 90 ? 'bg-success' : confidence >= 75 ? 'bg-warning' : 'bg-error'
export function AIRecommendationPanel({
  recommendation,
  evidence,
}: {
  recommendation: Recommendation
  evidence: Evidence[]
}) {
  return (
    <Card className="border-ai-primary/25">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md bg-ai-secondary text-ai-primary">
            <Sparkles className="size-4" />
          </span>
          <div>
            <p className="text-body-sm text-muted-foreground">AI Recommendation</p>
            <h2 className="text-h3">{recommendation.title}</h2>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg bg-ai-secondary/50 p-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-body-sm text-muted-foreground">Confidence</p>
              <p className="mt-1 text-4xl font-semibold text-ai-primary">
                {recommendation.confidence}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-body-sm text-muted-foreground">Risk</p>
              <p className="text-label capitalize">{recommendation.risk}</p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-pill bg-surface">
            <div
              className={`h-full rounded-pill ${confidenceTone(recommendation.confidence)}`}
              style={{ width: `${recommendation.confidence}%` }}
              aria-label={`AI confidence ${recommendation.confidence}%`}
            />
          </div>
        </div>
        <div>
          <h3 className="text-h4">Reason</h3>
          <p className="mt-2 text-body text-muted-foreground">{recommendation.reason}</p>
        </div>
        <div>
          <h3 className="text-h4">Why did AI recommend this?</h3>
          <ul className="mt-3 space-y-2">
            {recommendation.explanation.map((item) => (
              <li key={item} className="flex gap-2 text-body text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <EvidenceCard evidence={evidence} />
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4">
        <ReviewActions />
        <p className="flex gap-2 text-body-sm text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0 text-ai-primary" aria-hidden="true" />
          AI recommendations assist reviewers but do not replace professional judgment.
        </p>
      </CardFooter>
    </Card>
  )
}
