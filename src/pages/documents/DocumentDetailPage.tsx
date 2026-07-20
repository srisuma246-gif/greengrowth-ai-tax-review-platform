import { Link, useParams } from 'react-router-dom'
import { documentRecords } from '@/data/documents'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { reviewWorkspaceRoute } from '@/utils/routes'
export function DocumentDetailPage() {
  const { id } = useParams()
  const document = documentRecords.find((item) => item.id === id) ?? documentRecords[0]
  return (
    <div className="space-y-8">
      <header>
        <Link className="text-body text-primary hover:underline" to="/documents">
          Back to Documents
        </Link>
        <h1 className="mt-3 text-h1">{document.filename}</h1>
      </header>
      <Card>
        <CardHeader>
          <h2 className="text-h3">Document Metadata</h2>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Client', document.client],
              ['Return', document.returnId],
              ['Upload Date', document.uploadedAt],
              ['Document Type', document.type],
              ['Processing Status', document.status],
              ['Confidence', document.confidence ? `${document.confidence}%` : 'Pending'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-body-sm text-muted-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-h3">OCR Extracted Fields</h2>
        </CardHeader>
        <CardContent>
          {document.fields.length ? (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th>Field Name</th>
                  <th>Extracted Value</th>
                  <th>Confidence</th>
                  <th>Mapped Tax Field</th>
                </tr>
              </thead>
              <tbody>
                {document.fields.map((field) => (
                  <tr key={field.name} className="border-b">
                    <td className="py-3">{field.name}</td>
                    <td>{field.value}</td>
                    <td>{field.confidence}%</td>
                    <td>{field.mappedField}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-body text-muted-foreground">OCR fields are pending processing.</p>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-h3">Preview</h2>
        </CardHeader>
        <CardContent>
          <div className="grid min-h-48 place-items-center rounded-md border border-dashed bg-secondary text-body text-muted-foreground">
            Mock document preview
          </div>
        </CardContent>
      </Card>
      <Button asChild>
        <Link to={reviewWorkspaceRoute(document.returnId)}>Open Evidence</Link>
      </Button>
    </div>
  )
}
