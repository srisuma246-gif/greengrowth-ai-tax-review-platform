export interface TaxReturn {
  id: string
  clientName: string
  taxYear: number
  status: 'draft' | 'in-review' | 'completed' | 'filed'
  priority: 'low' | 'medium' | 'high'
  assignedTo: string
  lastUpdated: string
}
