import { useCallback, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { DashboardSkeleton } from '@/components/skeletons'
import { dashboardMetrics, dashboardSummary, workspaceInfo } from '@/data/dashboard'
import {
  aiPerformance,
  alerts,
  recentActivity,
  reviewerWorkload,
  riskDistribution,
  todayPriorities,
} from '@/data/dashboard-overview'
import { aiInsights, overallAIConfidence } from '@/data/recommendations'
import { quickActions } from '@/data/quick-actions'
import { reviewQueueReturns } from '@/data/returns'
import {
  DashboardGrid,
  DashboardHeader,
  KPIGrid,
  RecentActivity,
  RiskDistributionCard,
  TodaysPriorities,
  WorkloadOverview,
} from '@/features/dashboard'
import type {
  ReviewQueueFilters,
  ReviewQueueSortKey,
  SortDirection,
} from '@/features/dashboard/types'
import { useLoading } from '@/hooks/useLoading'

const statusSearchLabels = {
  pending: 'pending review',
  'in-review': 'in review',
  completed: 'completed',
  blocked: 'blocked',
} as const
export function DashboardPage() {
  const [queueFilters, setQueueFilters] = useState<ReviewQueueFilters>({
    search: '',
    priority: 'all',
    status: 'all',
    reviewer: 'all',
  })
  const [queueSort, setQueueSort] = useState<{ key: ReviewQueueSortKey; direction: SortDirection }>(
    { key: 'id', direction: 'none' },
  )
  const [refreshing, setRefreshing] = useState(false)
  const [refreshAnnouncement, setRefreshAnnouncement] = useState('')
  const { isLoading, run } = useLoading(500)
  const reviewers = useMemo(
    () => Array.from(new Set(reviewQueueReturns.map((item) => item.assignedTo.name))).sort(),
    [],
  )
  const filteredReturns = useMemo(() => {
    const search = queueFilters.search.trim().toLowerCase()
    const rows = reviewQueueReturns.filter((item) => {
      const matchesSearch =
        !search ||
        [
          item.id,
          item.clientName,
          item.assignedTo.name,
          item.status,
          statusSearchLabels[item.status],
        ].some((value) => value.toLowerCase().includes(search))
      return (
        matchesSearch &&
        (queueFilters.priority === 'all' || item.priority === queueFilters.priority) &&
        (queueFilters.status === 'all' || item.status === queueFilters.status) &&
        (queueFilters.reviewer === 'all' || item.assignedTo.name === queueFilters.reviewer)
      )
    })
    if (queueSort.direction === 'none') return rows
    const multiplier = queueSort.direction === 'ascending' ? 1 : -1
    return [...rows].sort((left, right) =>
      queueSort.key === 'id'
        ? multiplier * left.id.localeCompare(right.id, undefined, { numeric: true })
        : multiplier * (left.aiConfidence - right.aiConfidence),
    )
  }, [queueFilters, queueSort])
  const handleSort = useCallback(
    (key: ReviewQueueSortKey) =>
      setQueueSort((current) =>
        current.key !== key
          ? { key, direction: 'ascending' }
          : {
              key,
              direction:
                current.direction === 'none'
                  ? 'ascending'
                  : current.direction === 'ascending'
                    ? 'descending'
                    : 'none',
            },
      ),
    [],
  )
  const handleRefresh = useCallback(() => {
    setRefreshing(true)
    void run(
      () =>
        new Promise<void>((resolve) => {
          window.setTimeout(resolve, 1000)
        }),
    ).then(() => {
      setRefreshing(false)
      setRefreshAnnouncement('Dashboard updated successfully')
      toast.success('Dashboard updated successfully')
    })
  }, [run])
  return (
    <div className="space-y-8">
      <p className="sr-only" role="status" aria-live="polite">
        {refreshAnnouncement}
      </p>
      <DashboardHeader
        summary={dashboardSummary}
        workspace={workspaceInfo}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <KPIGrid metrics={dashboardMetrics} />
          <TodaysPriorities priorities={todayPriorities} />
          <section className="grid gap-6 lg:grid-cols-2">
            <RiskDistributionCard data={riskDistribution} />
            <WorkloadOverview data={reviewerWorkload} />
          </section>
          <DashboardGrid
            returns={filteredReturns}
            actions={quickActions}
            insights={aiInsights}
            confidence={overallAIConfidence}
            alerts={alerts}
            aiPerformance={aiPerformance}
            queueFilters={queueFilters}
            reviewers={reviewers}
            queueSort={queueSort}
            onQueueFiltersChange={setQueueFilters}
            onQueueSort={handleSort}
          />
          <RecentActivity activity={recentActivity} />
        </>
      )}
    </div>
  )
}
