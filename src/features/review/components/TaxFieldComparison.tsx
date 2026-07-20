import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { FieldMapping } from '@/features/review/types'
export function TaxFieldComparison({ mapping }: { mapping: FieldMapping }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-h4">Tax Field Comparison</h3>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 text-center sm:grid-cols-3">
          <div>
            <p className="text-body-sm text-muted-foreground">Source Value</p>
            <p className="mt-1 text-label">{mapping.sourceLabel}</p>
            <p className="text-h3">{mapping.extractedValue}</p>
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Extracted Value</p>
            <p className="mt-1 text-label">OCR Extraction</p>
            <p className="text-h3">{mapping.extractedValue}</p>
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Tax Return Field</p>
            <p className="mt-1 text-label">{mapping.taxReturnField}</p>
            <p className="text-h3">{mapping.extractedValue}</p>
          </div>
        </div>
        <p className="mt-5 flex items-center justify-center gap-1 text-body-sm text-success">
          <CheckCircle2 className="size-4" aria-hidden="true" />
          Verified
        </p>
      </CardContent>
    </Card>
  )
}
