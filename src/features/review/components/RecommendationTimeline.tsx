import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { RecommendationTimelineEvent } from '@/features/review/types'
import { fadeIn } from '@/utils/motion'
export function RecommendationTimeline({ events }: { events: RecommendationTimelineEvent[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Recommendation Timeline</h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {events.map((event, index) => (
            <motion.li
              key={event.id}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-[3rem_1fr] gap-3"
            >
              <time className="text-body-sm text-muted-foreground">{event.time}</time>
              <div className="relative border-l pl-4 text-body before:absolute before:-left-1.5 before:top-1.5 before:size-3 before:rounded-pill before:bg-ai-primary">
                {event.title}
              </div>
            </motion.li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
