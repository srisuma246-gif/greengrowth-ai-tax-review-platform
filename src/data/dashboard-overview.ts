import type {
  AIPerformance,
  ActivityItem,
  DashboardAlert,
  ReviewerWorkloadItem,
  RiskDistributionItem,
  TodayPriority,
} from '@/features/dashboard/types'
export const todayPriorities: TodayPriority[] = [
  {
    id: 'high-risk',
    title: 'High Risk Returns',
    value: 4,
    description: 'Needs manual review',
    tone: 'error',
  },
  {
    id: 'missing-documents',
    title: 'Missing Documents',
    value: 2,
    description: 'Waiting for upload',
    tone: 'warning',
  },
  {
    id: 'ready-approve',
    title: 'Ready to Approve',
    value: 18,
    description: 'High AI confidence',
    tone: 'success',
  },
  { id: 'processed', title: 'Returns Processed', value: 184, description: 'Today', tone: 'ai' },
]
export const riskDistribution: RiskDistributionItem[] = [
  { name: 'High', value: 4, tone: 'error' },
  { name: 'Medium', value: 11, tone: 'warning' },
  { name: 'Low', value: 27, tone: 'success' },
]
export const reviewerWorkload: ReviewerWorkloadItem[] = [
  { day: 'Mon', assigned: 18, completed: 13, pending: 5 },
  { day: 'Tue', assigned: 22, completed: 15, pending: 7 },
  { day: 'Wed', assigned: 19, completed: 16, pending: 3 },
  { day: 'Thu', assigned: 24, completed: 18, pending: 6 },
  { day: 'Fri', assigned: 20, completed: 14, pending: 6 },
]
export const alerts: DashboardAlert[] = [
  {
    id: 'missing-w2',
    title: 'Missing W-2 for RET-1044',
    severity: 'high',
    timestamp: '12 min ago',
  },
  {
    id: 'low-confidence',
    title: 'Low confidence deduction',
    severity: 'medium',
    timestamp: '28 min ago',
  },
  { id: 'overdue', title: 'Manual review overdue', severity: 'high', timestamp: '1 hr ago' },
  {
    id: 'irs-warning',
    title: 'IRS validation warning',
    severity: 'medium',
    timestamp: '2 hrs ago',
  },
]
export const recentActivity: ActivityItem[] = [
  {
    id: 'approve',
    actor: { name: 'Sarah Chen', initials: 'SC' },
    action: 'approved RET-1042',
    timestamp: '9 min ago',
    tone: 'success',
  },
  {
    id: 'reject',
    actor: { name: 'Marcus Lee', initials: 'ML' },
    action: 'rejected RET-1041',
    timestamp: '26 min ago',
    tone: 'error',
  },
  {
    id: 'ai-recommendation',
    actor: { name: 'AI', initials: 'AI' },
    action: 'generated a recommendation',
    timestamp: '38 min ago',
    tone: 'ai',
  },
  {
    id: 'payroll',
    actor: { name: 'Priya Shah', initials: 'PS' },
    action: 'uploaded Payroll Report',
    timestamp: '1 hr ago',
    tone: 'neutral',
  },
  {
    id: 'balance-sheet',
    actor: { name: 'AI', initials: 'AI' },
    action: 'verified Balance Sheet',
    timestamp: '2 hrs ago',
    tone: 'ai',
  },
]
export const aiPerformance: AIPerformance = {
  averageConfidence: 94,
  autoApproved: 73,
  manualReview: 19,
  rejected: 8,
}
