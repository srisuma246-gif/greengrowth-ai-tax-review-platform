export type ReviewStatus = 'pending' | 'in-review' | 'completed' | 'blocked'
export type ReviewPriority = 'high' | 'medium' | 'low'
export interface ReviewSummary {
  returnId: string
  clientName: string
  taxYear: number
  returnType: string
  assignedReviewer: { name: string; initials: string }
  status: ReviewStatus
  priority: ReviewPriority
  documentsSubmitted: number
  estimatedRefund: string
}
export interface SourceDocument {
  id: string
  name: string
  fileType: string
  status: 'uploaded' | 'verified'
}
export interface Recommendation {
  id: string
  title: string
  confidence: number
  risk: 'low' | 'medium' | 'high'
  reason: string
  explanation: string[]
}
export interface Evidence {
  id: string
  document: string
  matchedField: string
  location: string
  confidence: number
}
export interface FieldMapping {
  id: string
  taxField: string
  extractedValue: string
  sourceDocument: string
  page: string
  confidence: number
  evidenceId: string
  sourceLabel: string
  taxReturnField: string
}
export interface ConfidenceFactor {
  id: string
  label: string
  weight: number
  description: string
}
export interface RecommendationTimelineEvent {
  id: string
  time: string
  title: string
}
export interface AlternativeRecommendation {
  id: string
  title: string
  confidence: number
  reason: string
  potentialImpact: string
}
export interface AILimitations {
  used: string[]
  cannotVerify: string[]
  disclaimer: string
}
export type ReviewerDecision = 'accepted' | 'overridden'
export interface SavedReviewerDecision {
  decision: ReviewerDecision
  reason?: string
  savedAt: string
}
export interface EvidenceDetail {
  id: string
  document: string
  matchedField: string
  originalValue: string
  extractedValue: string
  page: string
  reason: string
  confidence: number
  snippet: string
  status: 'verified' | 'pending'
}
