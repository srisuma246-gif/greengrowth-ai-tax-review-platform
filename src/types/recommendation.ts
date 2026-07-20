export interface Recommendation {
  id: string
  title: string
  description: string
  confidence: number
  status: 'pending' | 'accepted' | 'dismissed'
  evidence: string[]
}
