export interface DocumentRecord {
  id: string
  filename: string
  client: string
  returnId: string
  type: 'W-2' | '1099' | 'Invoice' | 'Receipt' | 'Schedule K-1'
  uploadedAt: string
  status: 'uploaded' | 'processing' | 'processed' | 'failed'
  confidence: number
  fields: Array<{ name: string; value: string; confidence: number; mappedField: string }>
}
export const documentRecords: DocumentRecord[] = [
  {
    id: 'w2-2025',
    filename: 'W2_2025.pdf',
    client: 'Acme Logistics',
    returnId: 'RET-1042',
    type: 'W-2',
    uploadedAt: 'May 14, 2025',
    status: 'processed',
    confidence: 98,
    fields: [
      { name: 'Gross Income', value: '182000', confidence: 99, mappedField: 'Form 1040 Line 1' },
    ],
  },
  {
    id: '1099-misc',
    filename: '1099_MISC.pdf',
    client: 'Acme Logistics',
    returnId: 'RET-1042',
    type: '1099',
    uploadedAt: 'May 14, 2025',
    status: 'processed',
    confidence: 94,
    fields: [
      { name: 'Donation Amount', value: '12500', confidence: 97, mappedField: 'Schedule A' },
    ],
  },
  {
    id: 'invoice-atlas',
    filename: 'Vendor_Invoice.pdf',
    client: 'Atlas Manufacturing',
    returnId: 'RET-1038',
    type: 'Invoice',
    uploadedAt: 'May 13, 2025',
    status: 'processing',
    confidence: 0,
    fields: [],
  },
  {
    id: 'k1-willow',
    filename: 'Schedule_K1.pdf',
    client: 'Willow & Co.',
    returnId: 'RET-1037',
    type: 'Schedule K-1',
    uploadedAt: 'May 12, 2025',
    status: 'uploaded',
    confidence: 0,
    fields: [],
  },
]
