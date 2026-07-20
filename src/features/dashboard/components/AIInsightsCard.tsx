import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import type { AIInsight } from '@/features/dashboard/types'
const tones = {
  neutral: 'bg-secondary text-foreground',
  warning: 'bg-warning/15 text-warning',
  error: 'bg-error/15 text-error',
  ai: 'bg-ai-secondary text-ai-primary',
}
export function AIInsightsCard({
  confidence,
  insights,
}: {
  confidence: number
  insights: AIInsight[]
}) {
  return (
    <Card className="border-ai-primary/25">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md bg-ai-secondary text-ai-primary">
            <Sparkles className="size-4" />
          </span>
          <h2 className="text-h3">AI Insights</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-body-sm text-muted-foreground">Overall AI Confidence</p>
          <p className="mt-1 text-3xl font-semibold text-ai-primary">{confidence}%</p>
        </div>
        <ul className="space-y-2">
          {insights.map((insight) => (
            <li key={insight.id} className="flex items-center gap-2 text-body">
              <span
                className={`rounded-pill px-2 py-0.5 text-xs font-medium ${tones[insight.tone]}`}
              >
                {insight.value}
              </span>
              <span className="text-muted-foreground">{insight.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" fullWidth>
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
