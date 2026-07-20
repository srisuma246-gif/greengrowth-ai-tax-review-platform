import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  FileText,
  Files,
  Minus,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Feedback'
import type { DashboardMetric, DashboardMetricIconName } from '@/features/dashboard/types'
import { cardHover } from '@/utils/motion'
const metricIcons: Record<DashboardMetricIconName, typeof FileText> = {
  fileText: FileText,
  sparkles: Sparkles,
  files: Files,
  clock: Clock3,
}
const trendStyles = { up: 'text-success', down: 'text-error', neutral: 'text-muted-foreground' }
const trendIcons = { up: ArrowUpRight, down: ArrowDownRight, neutral: Minus }
export function KPICard({
  metric,
  loading = false,
}: {
  metric: DashboardMetric
  loading?: boolean
}) {
  if (loading)
    return (
      <Card variant="interactive">
        <CardContent>
          <Skeleton variant="dashboardCard" />
        </CardContent>
      </Card>
    )
  const Icon = metricIcons[metric.iconName]
  const TrendIcon = trendIcons[metric.trendDirection]
  return (
    <motion.div whileHover={cardHover}>
      <Card variant="interactive" className="h-full">
        <CardContent className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <p className="text-label text-muted-foreground">{metric.title}</p>
            <span className="grid size-9 place-items-center rounded-md bg-secondary text-foreground">
              <Icon className="size-4" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-6 text-3xl font-semibold tracking-tight">{metric.value}</p>
          <p className="mt-3 flex items-center gap-1 text-body-sm text-muted-foreground">
            <span className={trendStyles[metric.trendDirection]}>
              <TrendIcon className="inline size-3.5" aria-hidden="true" /> {metric.trend}
            </span>
            <span>{metric.description}</span>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
