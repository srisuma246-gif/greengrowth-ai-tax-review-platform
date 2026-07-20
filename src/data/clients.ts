export interface ClientRecord {
  id: string
  name: string
  industry: 'Transportation' | 'Manufacturing' | 'Retail' | 'Healthcare' | 'Technology'
  reviewer: string
  risk: 'high' | 'medium' | 'low'
  returns: number
  pending: number
  completed: number
  confidence: number
  lastActivity: string
  taxYear: number
}
export const clients: ClientRecord[] = [
  {
    id: 'acme-logistics',
    name: 'Acme Logistics',
    industry: 'Transportation',
    reviewer: 'Sarah Chen',
    risk: 'high',
    returns: 12,
    pending: 3,
    completed: 9,
    confidence: 95,
    lastActivity: '2 hours ago',
    taxYear: 2025,
  },
  {
    id: 'atlas-manufacturing',
    name: 'Atlas Manufacturing',
    industry: 'Manufacturing',
    reviewer: 'Marcus Lee',
    risk: 'medium',
    returns: 8,
    pending: 2,
    completed: 6,
    confidence: 87,
    lastActivity: '4 hours ago',
    taxYear: 2025,
  },
  {
    id: 'horizon-medical',
    name: 'Horizon Medical',
    industry: 'Healthcare',
    reviewer: 'Priya Shah',
    risk: 'low',
    returns: 6,
    pending: 1,
    completed: 5,
    confidence: 96,
    lastActivity: 'Yesterday',
    taxYear: 2025,
  },
  {
    id: 'northstar-foods',
    name: 'Northstar Foods',
    industry: 'Retail',
    reviewer: 'Sarah Chen',
    risk: 'medium',
    returns: 10,
    pending: 4,
    completed: 6,
    confidence: 82,
    lastActivity: 'Yesterday',
    taxYear: 2025,
  },
  {
    id: 'willow-co',
    name: 'Willow & Co.',
    industry: 'Technology',
    reviewer: 'Priya Shah',
    risk: 'low',
    returns: 5,
    pending: 0,
    completed: 5,
    confidence: 98,
    lastActivity: '2 days ago',
    taxYear: 2025,
  },
]
