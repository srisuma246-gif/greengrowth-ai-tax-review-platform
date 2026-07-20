import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { FieldMapping } from '@/features/review/types'
import { TaxFieldComparison } from '@/features/review/components/TaxFieldComparison'
const confidenceColor = (value: number) =>
  value >= 90 ? 'text-success' : value >= 75 ? 'text-warning' : 'text-error'
export function FieldTraceabilityCard({
  mappings,
  onViewEvidence,
}: {
  mappings: FieldMapping[]
  onViewEvidence: (evidenceId: string) => void
}) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-h3">Field Traceability</h2>
          <p className="mt-1 text-body text-muted-foreground">
            Trace tax return fields back to their supporting source documents.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead className="border-b text-muted-foreground">
                <tr>
                  {[
                    'Tax Field',
                    'Extracted Value',
                    'Source Document',
                    'Page',
                    'Confidence',
                    '',
                  ].map((header) => (
                    <th key={header} scope="col" className="px-3 py-2 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mappings.map((mapping) => (
                  <tr key={mapping.id} className="border-b last:border-0">
                    <td className="px-3 py-3 font-medium">{mapping.taxField}</td>
                    <td className="px-3 py-3">{mapping.extractedValue}</td>
                    <td className="px-3 py-3">{mapping.sourceDocument}</td>
                    <td className="px-3 py-3">{mapping.page}</td>
                    <td className={`px-3 py-3 font-medium ${confidenceColor(mapping.confidence)}`}>
                      {mapping.confidence}%
                    </td>
                    <td className="px-3 py-3 text-right">
                      <Button
                        variant="link"
                        size="sm"
                        leftIcon={<Eye className="size-3.5" />}
                        onClick={() => onViewEvidence(mapping.evidenceId)}
                      >
                        View Evidence
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <TaxFieldComparison mapping={mappings[0]} />
    </div>
  )
}
