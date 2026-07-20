import { CheckCircle2, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import type { SourceDocument } from '@/features/review/types'
export function SourceDocumentsCard({ documents }: { documents: SourceDocument[] }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-h3">Source Documents</h2>
      </CardHeader>
      <CardContent>
        <ul className="divide-y">
          {documents.map((document) => (
            <li key={document.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="grid size-9 place-items-center rounded-md bg-secondary">
                <FileText className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-label">{document.name}</p>
                <p className="text-body-sm text-muted-foreground">{document.fileType}</p>
              </div>
              <Badge variant={document.status === 'verified' ? 'approved' : 'status'}>
                <CheckCircle2 className="mr-1 size-3" />
                {document.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
