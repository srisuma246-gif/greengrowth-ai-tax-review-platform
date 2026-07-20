import type { AIInsight } from '@/features/dashboard/types'
export const aiInsights: AIInsight[] = [
  { id: 'low-confidence', label: 'low-confidence returns', value: '12', tone: 'warning' },
  { id: 'missing-documents', label: 'missing documents', value: '4', tone: 'error' },
  { id: 'anomalies', label: 'anomaly detections', value: '3', tone: 'error' },
  { id: 'recommendations', label: 'recommendations generated today', value: '18', tone: 'ai' },
]
export const overallAIConfidence = 94
