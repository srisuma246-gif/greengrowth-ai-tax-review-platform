import type { DashboardMetric, DashboardSummary, WorkspaceInfo } from '@/features/dashboard/types'
export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'pending-reviews',
    title: 'Returns Pending Review',
    value: '42',
    description: 'from yesterday',
    trend: '+8',
    trendDirection: 'up',
    iconName: 'fileText',
  },
  {
    id: 'ai-recommendations',
    title: 'AI Recommendations',
    value: '76',
    description: 'require manual verification',
    trend: '12',
    trendDirection: 'neutral',
    iconName: 'sparkles',
  },
  {
    id: 'documents-processed',
    title: 'Documents Processed Today',
    value: '184',
    description: 'compared to yesterday',
    trend: '+14%',
    trendDirection: 'up',
    iconName: 'files',
  },
  {
    id: 'average-review-time',
    title: 'Average Review Time',
    value: '14 min',
    description: 'faster than last week',
    trend: '2 minutes',
    trendDirection: 'up',
    iconName: 'clock',
  },
]
export const dashboardSummary: DashboardSummary = {
  greeting: 'Good Morning, Sarah 👋',
  title: 'Welcome back to GreenGrowth AI Workspace.',
  description: "Here's your tax review workload for today.",
  lastUpdated: 'Last updated 10:42 AM',
  reviewPeriod: 'Current review period: 2025 Tax Season',
}
export const workspaceInfo: WorkspaceInfo = {
  id: 'greengrowth-cpa',
  name: 'GreenGrowth CPA',
  plan: 'Professional',
}
