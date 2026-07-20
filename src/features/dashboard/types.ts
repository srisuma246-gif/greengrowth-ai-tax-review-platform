export type TrendDirection = 'up' | 'down' | 'neutral'
export type DashboardMetricIconName = 'fileText' | 'sparkles' | 'files' | 'clock'
export interface DashboardMetric {
  id: string
  title: string
  value: string
  description: string
  trend: string
  trendDirection: TrendDirection
  iconName: DashboardMetricIconName
}
export interface DashboardSummary {
  greeting: string
  title: string
  description: string
  lastUpdated: string
  reviewPeriod: string
}
export interface WorkspaceInfo {
  id: string
  name: string
  plan: string
}
export type ReturnPriority = 'high' | 'medium' | 'low'
export type ReturnStatus = 'pending' | 'in-review' | 'completed' | 'blocked'
export interface ReviewQueueReturn {
  id: string
  clientName: string
  priority: ReturnPriority
  status: ReturnStatus
  aiConfidence: number
  assignedTo: { name: string; initials: string; avatarUrl?: string }
}
export interface ReviewQueueFilters {
  search: string
  priority: ReturnPriority | 'all'
  status: ReturnStatus | 'all'
  reviewer: string
}
export type ReviewQueueSortKey = 'id' | 'confidence'
export type SortDirection = 'ascending' | 'descending' | 'none'
export interface QuickAction {
  id: string
  title: string
  description: string
  iconName: 'startReview' | 'upload' | 'clients' | 'aiAssistant'
}
export interface AIInsight {
  id: string
  label: string
  value: string
  tone: 'neutral' | 'warning' | 'error' | 'ai'
}
export interface TodayPriority {
  id: string
  title: string
  description: string
  value: number
  tone: 'error' | 'warning' | 'success' | 'ai'
}
export interface RiskDistributionItem {
  name: 'High' | 'Medium' | 'Low'
  value: number
  tone: 'error' | 'warning' | 'success'
}
export interface ReviewerWorkloadItem {
  day: string
  assigned: number
  completed: number
  pending: number
}
export interface DashboardAlert {
  id: string
  title: string
  severity: 'high' | 'medium' | 'low'
  timestamp: string
}
export interface ActivityItem {
  id: string
  actor: { name: string; initials: string }
  action: string
  timestamp: string
  tone: 'success' | 'error' | 'ai' | 'neutral'
}
export interface AIPerformance {
  averageConfidence: number
  autoApproved: number
  manualReview: number
  rejected: number
}
