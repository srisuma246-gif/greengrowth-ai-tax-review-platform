import { motion, useReducedMotion } from 'framer-motion'
import type { DashboardMetric } from '@/features/dashboard/types'
import { KPICard } from '@/features/dashboard/components/KPICard'
import { slideUp, staggerContainer } from '@/lib/animations'
export function KPIGrid({
  metrics,
  loading = false,
}: {
  metrics: DashboardMetric[]
  loading?: boolean
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.section
      aria-label="Dashboard metrics"
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'visible'}
      variants={staggerContainer}
      className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {metrics.map((metric) => (
        <motion.div key={metric.id} variants={slideUp}>
          <KPICard metric={metric} loading={loading} />
        </motion.div>
      ))}
    </motion.section>
  )
}
