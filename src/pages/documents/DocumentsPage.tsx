import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { documentRecords } from '@/data/documents'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Select } from '@/components/ui/FormControls'
import { SearchInput } from '@/components/ui/Input'
const statusVariant = {
  uploaded: 'status',
  processing: 'pending',
  processed: 'approved',
  failed: 'error',
} as const
export function DocumentsPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')
  const [status, setStatus] = useState('all')
  const filtered = useMemo(
    () =>
      documentRecords.filter((document) => {
        const q = search.toLowerCase()
        return (
          (!q ||
            [document.filename, document.client, document.returnId].some((value) =>
              value.toLowerCase().includes(q),
            )) &&
          (type === 'all' || document.type === type) &&
          (status === 'all' || document.status === status)
        )
      }),
    [search, type, status],
  )
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-h1">Documents</h1>
        <p className="mt-1 text-body-lg text-muted-foreground">Manage uploaded tax documents.</p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Uploaded Documents', 248],
          ['OCR Processed', 221],
          ['Pending Processing', 18],
          ['Average Extraction Confidence', '94%'],
        ].map(([label, value]) => (
          <Card key={String(label)} variant="kpi">
            <CardContent>
              <p className="text-body-sm text-muted-foreground">{label}</p>
              <p className="mt-2 text-3xl font-semibold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-nowrap">
        <SearchInput
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search documents"
          placeholder="Search filename, client, or return"
          className="w-full sm:min-w-64 lg:flex-1"
        />
        <Select
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label="Filter by document type"
          className="w-full sm:w-44"
        >
          <option value="all">All document types</option>
          {['W-2', '1099', 'Invoice', 'Receipt', 'Schedule K-1'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
        <Select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          aria-label="Filter by processing status"
          className="w-full sm:w-44"
        >
          <option value="all">All statuses</option>
          {['uploaded', 'processing', 'processed', 'failed'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <Card>
        <CardContent className="pt-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[48rem] text-left text-sm">
              <thead className="border-b">
                <tr>
                  {[
                    'Filename',
                    'Client',
                    'Return',
                    'Document Type',
                    'Upload Date',
                    'OCR Status',
                    'Confidence',
                    '',
                  ].map((heading) => (
                    <th key={heading} className="px-3 py-2">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((document) => (
                  <tr key={document.id} className="border-b">
                    <td className="px-3 py-3 font-medium">{document.filename}</td>
                    <td className="px-3 py-3">{document.client}</td>
                    <td className="px-3 py-3">{document.returnId}</td>
                    <td className="px-3 py-3">{document.type}</td>
                    <td className="px-3 py-3">{document.uploadedAt}</td>
                    <td className="px-3 py-3">
                      <Badge variant={statusVariant[document.status]}>{document.status}</Badge>
                    </td>
                    <td className="px-3 py-3">
                      {document.confidence ? `${document.confidence}%` : '—'}
                    </td>
                    <td className="px-3 py-3">
                      <Button asChild variant="link" size="sm">
                        <Link to={`/documents/${document.id}`}>View</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
