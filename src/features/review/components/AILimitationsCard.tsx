import { CheckCircle2, CircleAlert } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import type { AILimitations } from '@/features/review/types'
export function AILimitationsCard({ limitations }: { limitations: AILimitations }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">AI Limitations</h2>
      </CardHeader>
      <CardContent className="grid gap-5 sm:grid-cols-2">
        <section>
          <h3 className="text-h4">AI used</h3>
          <ul className="mt-3 space-y-2">
            {limitations.used.map((item) => (
              <li key={item} className="flex gap-2 text-body">
                <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-h4">AI cannot verify</h3>
          <ul className="mt-3 space-y-2">
            {limitations.cannotVerify.map((item) => (
              <li key={item} className="flex gap-2 text-body text-muted-foreground">
                <CircleAlert className="size-4 shrink-0 text-warning" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
      <CardFooter>
        <p className="text-body-sm text-muted-foreground">{limitations.disclaimer}</p>
      </CardFooter>
    </Card>
  )
}
