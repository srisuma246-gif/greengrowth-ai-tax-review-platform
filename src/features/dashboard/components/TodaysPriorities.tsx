import { AlertCircle, Bot, CheckCircle2, FileWarning } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import type { TodayPriority } from '@/features/dashboard/types'
import { cardHover, slideUp } from '@/utils/motion'
const icons = { error: AlertCircle, warning: FileWarning, success: CheckCircle2, ai: Bot }
const tones = {
  error: 'bg-error/15 text-error',
  warning: 'bg-warning/15 text-warning',
  success: 'bg-success/15 text-success',
  ai: 'bg-ai-secondary text-ai-primary',
}
export function TodaysPriorities({ priorities }: { priorities: TodayPriority[] }) {
  return (
    <section aria-labelledby="priorities-title">
      <h2 id="priorities-title" className="mb-4 text-h3">
        Today's Priorities
      </h2>
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {priorities.map((priority) => {
          const Icon = icons[priority.tone]
          return (
            <motion.div
              key={priority.id}
              variants={slideUp}
              initial="hidden"
              animate="visible"
              whileHover={cardHover}
            >
              <Card variant="interactive">
                <CardContent className="flex items-center gap-4">
                  <span
                    className={`grid size-10 place-items-center rounded-md ${tones[priority.tone]}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-2xl font-semibold">{priority.value}</p>
                    <p className="text-label">{priority.title}</p>
                    <p className="text-body-sm text-muted-foreground">{priority.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
