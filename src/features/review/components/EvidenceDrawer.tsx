import { FileText } from 'lucide-react'
import { EvidenceDrawerSkeleton } from '@/components/skeletons'
import { Badge } from '@/components/ui/Badge'
import { Drawer } from '@/components/ui/Overlay'
import type { EvidenceDetail } from '@/features/review/types'
export function EvidenceDrawer({
  open,
  onOpenChange,
  detail,
  loading = false,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  detail?: EvidenceDetail
  loading?: boolean
}) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title="Evidence details"
      description="Supporting source information for the selected tax field."
    >
      {loading ? (
        <EvidenceDrawerSkeleton />
      ) : (
        detail && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-md bg-secondary">
                <FileText className="size-4" />
              </span>
              <div>
                <p className="text-label">{detail.document}</p>
                <p className="text-body-sm text-muted-foreground">
                  {detail.page} · {detail.matchedField}
                </p>
              </div>
              <Badge
                className="ml-auto"
                variant={detail.status === 'verified' ? 'approved' : 'pending'}
              >
                {detail.status}
              </Badge>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-body-sm text-muted-foreground">Original Value</dt>
                <dd className="mt-1 text-label">{detail.originalValue}</dd>
              </div>
              <div>
                <dt className="text-body-sm text-muted-foreground">Extracted Value</dt>
                <dd className="mt-1 text-label">{detail.extractedValue}</dd>
              </div>
              <div>
                <dt className="text-body-sm text-muted-foreground">Confidence</dt>
                <dd className="mt-1 text-label text-success">{detail.confidence}%</dd>
              </div>
            </dl>
            <div>
              <h3 className="text-h4">Reason</h3>
              <p className="mt-2 text-body text-muted-foreground">{detail.reason}</p>
            </div>
            <div>
              <h3 className="text-h4">Matched snippet</h3>
              <pre className="mt-2 whitespace-pre-wrap rounded-md bg-secondary p-3 font-mono text-xs text-foreground">
                {detail.snippet}
              </pre>
            </div>
          </div>
        )
      )}
    </Drawer>
  )
}
