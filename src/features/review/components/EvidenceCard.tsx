import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { Evidence } from '@/features/review/types'
const confidenceColor = (confidence: number) =>
  confidence >= 90 ? 'text-success' : confidence >= 75 ? 'text-warning' : 'text-error'
export function EvidenceCard({ evidence }: { evidence: Evidence[] }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-h4">Supporting Evidence</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {evidence.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b pb-3 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-label">{item.document}</p>
                <p className="text-body-sm text-muted-foreground">
                  {item.matchedField} · {item.location}
                </p>
              </div>
              <span className={`text-label ${confidenceColor(item.confidence)}`}>
                {item.confidence}%
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
