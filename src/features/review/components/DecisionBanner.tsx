import { CheckCircle2, Undo2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { SavedReviewerDecision } from '@/features/review/types'
export function DecisionBanner({ decision }: { decision: SavedReviewerDecision }) {
  const reduceMotion = useReducedMotion()
  const accepted = decision.decision === 'accepted'
  const Icon = accepted ? CheckCircle2 : Undo2
  return (
    <motion.div
      role="status"
      initial={reduceMotion ? false : { opacity: 0, y: -10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 rounded-lg border p-4 ${accepted ? 'border-success/30 bg-success/10 text-success' : 'border-warning/30 bg-warning/10 text-warning'}`}
    >
      <Icon className="size-5" aria-hidden="true" />
      <div>
        <p className="text-label">Recommendation {accepted ? 'Accepted' : 'Overridden'}</p>
        <p className="text-body-sm">Saved at {decision.savedAt}</p>
      </div>
    </motion.div>
  )
}
