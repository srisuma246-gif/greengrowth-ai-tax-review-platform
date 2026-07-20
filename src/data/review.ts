import type {
  Evidence,
  EvidenceDetail,
  FieldMapping,
  ConfidenceFactor,
  AlternativeRecommendation,
  AILimitations,
  Recommendation,
  RecommendationTimelineEvent,
  ReviewSummary,
  SourceDocument,
} from '@/features/review/types'
export const reviewSummary: ReviewSummary = {
  returnId: 'RET-1042',
  clientName: 'Acme Logistics',
  taxYear: 2025,
  returnType: 'Corporate',
  assignedReviewer: { name: 'Sarah Chen', initials: 'SC' },
  status: 'pending',
  priority: 'high',
  documentsSubmitted: 8,
  estimatedRefund: '$42,180',
}
export const recommendation: Recommendation = {
  id: 'charitable-deduction',
  title: 'Approve charitable deduction',
  confidence: 94,
  risk: 'low',
  reason: 'The deduction matches historical filings and supporting documentation.',
  explanation: [
    'Supporting documents were found.',
    'Values match prior returns.',
    'IRS validation rules passed.',
    'No conflicting records detected.',
  ],
}
export const evidence: Evidence[] = [
  {
    id: 'w2-income',
    document: 'W-2',
    matchedField: 'Income verified',
    location: 'Page 2',
    confidence: 97,
  },
  {
    id: '1099-deduction',
    document: '1099',
    matchedField: 'Matches deduction',
    location: 'Page 1',
    confidence: 94,
  },
  {
    id: 'payroll-values',
    document: 'Payroll Report',
    matchedField: 'Values consistent',
    location: 'Page 4',
    confidence: 91,
  },
]
export const documents: SourceDocument[] = [
  { id: 'w2', name: 'W-2.pdf', fileType: 'PDF', status: 'verified' },
  { id: '1099-misc', name: '1099_MISC.pdf', fileType: 'PDF', status: 'verified' },
  { id: 'balance-sheet', name: 'Balance_Sheet.xlsx', fileType: 'Spreadsheet', status: 'uploaded' },
  { id: 'payroll-report', name: 'Payroll_Report.pdf', fileType: 'PDF', status: 'verified' },
]
export const fieldMappings: FieldMapping[] = [
  {
    id: 'charitable-deduction',
    taxField: 'Charitable Deduction',
    extractedValue: '$12,500',
    sourceDocument: '1099_MISC.pdf',
    page: 'Page 2',
    confidence: 97,
    evidenceId: 'deduction-evidence',
    sourceLabel: '1099',
    taxReturnField: 'Schedule A',
  },
  {
    id: 'salary',
    taxField: 'Salary',
    extractedValue: '$182,000',
    sourceDocument: 'W-2.pdf',
    page: 'Page 1',
    confidence: 99,
    evidenceId: 'salary-evidence',
    sourceLabel: 'W-2',
    taxReturnField: 'Form 1040',
  },
  {
    id: 'business-expenses',
    taxField: 'Business Expenses',
    extractedValue: '$43,280',
    sourceDocument: 'Payroll_Report.pdf',
    page: 'Page 4',
    confidence: 91,
    evidenceId: 'expenses-evidence',
    sourceLabel: 'Payroll Report',
    taxReturnField: 'Schedule C',
  },
]
export const confidenceFactors: ConfidenceFactor[] = [
  {
    id: 'historical-filings',
    label: 'Historical filings match',
    weight: 28,
    description: 'Matched previous 3 tax years.',
  },
  {
    id: 'documents-verified',
    label: 'Supporting documents verified',
    weight: 31,
    description: 'Donation receipt verified.',
  },
  {
    id: 'irs-validation',
    label: 'IRS validation passed',
    weight: 22,
    description: 'Passed IRS Schedule A validation.',
  },
  {
    id: 'no-conflicts',
    label: 'No conflicting values',
    weight: 19,
    description: 'No contradictory values were detected.',
  },
]
export const recommendationTimeline: RecommendationTimelineEvent[] = [
  { id: 'recommendation', time: '09:14', title: 'AI recommendation generated' },
  { id: 'evidence', time: '09:16', title: 'Evidence verified' },
  { id: 'opened', time: '09:18', title: 'Sarah opened review' },
  { id: 'manual-review', time: '09:24', title: 'Manual override requested' },
  { id: 'approval', time: '09:31', title: 'Final approval recorded' },
]
export const evidenceDetails: EvidenceDetail[] = [
  {
    id: 'deduction-evidence',
    document: '1099_MISC.pdf',
    matchedField: 'Donation Amount',
    originalValue: '$12,500',
    extractedValue: '$12,500',
    page: 'Page 2',
    reason: 'The donated amount matches the Schedule A deduction and prior filing pattern.',
    confidence: 97,
    snippet: 'Charitable contribution: $12,500.00',
    status: 'verified',
  },
  {
    id: 'salary-evidence',
    document: 'W-2.pdf',
    matchedField: 'Wages, tips, other compensation',
    originalValue: '$182,000',
    extractedValue: '$182,000',
    page: 'Page 1',
    reason: 'Wages match the reported income field without variance.',
    confidence: 99,
    snippet: 'Box 1 Wages, tips, other compensation: $182,000.00',
    status: 'verified',
  },
  {
    id: 'expenses-evidence',
    document: 'Payroll_Report.pdf',
    matchedField: 'Business Expenses',
    originalValue: '$43,280',
    extractedValue: '$43,280',
    page: 'Page 4',
    reason: 'Payroll totals reconcile to the expense line item.',
    confidence: 91,
    snippet: 'Total eligible payroll expense: $43,280.00',
    status: 'verified',
  },
]
export const alternativeRecommendation: AlternativeRecommendation = {
  id: 'reject-deduction',
  title: 'Reject Charitable Deduction',
  confidence: 41,
  reason: 'Donation receipt missing.',
  potentialImpact: 'Increase tax liability by $1,850',
}
export const aiLimitations: AILimitations = {
  used: ['Uploaded Documents', 'OCR Extraction', 'Historical Returns', 'IRS Rules'],
  cannotVerify: [
    'Client intent',
    'Missing files',
    'External systems',
    'Manual accounting adjustments',
  ],
  disclaimer: 'Professional judgment is required before filing.',
}
