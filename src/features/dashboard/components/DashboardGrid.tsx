import type {
  AIInsight,
  AIPerformance,
  DashboardAlert,
  QuickAction,
  ReviewQueueReturn,
  ReviewQueueFilters,
  ReviewQueueSortKey,
  SortDirection,
} from '@/features/dashboard/types'
import { AIPerformanceCard } from '@/features/dashboard/components/AIPerformanceCard'
import { AIInsightsCard } from '@/features/dashboard/components/AIInsightsCard'
import { AlertsPanel } from '@/features/dashboard/components/AlertsPanel'
import { QuickActions } from '@/features/dashboard/components/QuickActions'
import { ReviewQueue } from '@/features/dashboard/components/ReviewQueue'
export function DashboardGrid({
  returns,
  actions,
  insights,
  confidence,
  alerts,
  aiPerformance,
  queueFilters,
  reviewers,
  queueSort,
  onQueueFiltersChange,
  onQueueSort,
}: {
  returns: ReviewQueueReturn[]
  actions: QuickAction[]
  insights: AIInsight[]
  confidence: number
  alerts: DashboardAlert[]
  aiPerformance: AIPerformance
  queueFilters: ReviewQueueFilters
  reviewers: string[]
  queueSort: { key: ReviewQueueSortKey; direction: SortDirection }
  onQueueFiltersChange: (filters: ReviewQueueFilters) => void
  onQueueSort: (key: ReviewQueueSortKey) => void
}) {
  return (
    <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,7fr)_minmax(18rem,3fr)]">
      <ReviewQueue
        returns={returns}
        filters={queueFilters}
        reviewers={reviewers}
        sort={queueSort}
        onFiltersChange={onQueueFiltersChange}
        onSort={onQueueSort}
      />
      <aside className="grid gap-6">
        <QuickActions actions={actions} />
        <AIInsightsCard confidence={confidence} insights={insights} />
        <AIPerformanceCard performance={aiPerformance} />
        <AlertsPanel alerts={alerts} />
      </aside>
    </section>
  )
}
