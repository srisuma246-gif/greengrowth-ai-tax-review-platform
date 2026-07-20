import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Select } from '@/components/ui/FormControls'
import { SearchInput } from '@/components/ui/Input'
import { DataTable, type DataTableColumn } from '@/components/common/DataTable'
import type {
  ReviewQueueFilters,
  ReviewQueueReturn,
  ReturnPriority,
  ReturnStatus,
  ReviewQueueSortKey,
  SortDirection,
} from '@/features/dashboard/types'
import { reviewWorkspaceRoute } from '@/utils/routes'

const priorityBadges: Record<ReturnPriority, { label: string; className: string }> = {
  high: { label: 'High', className: 'bg-error/15 text-error' },
  medium: { label: 'Medium', className: 'bg-warning/15 text-warning' },
  low: { label: 'Low', className: 'bg-success/15 text-success' },
}
const statusBadges: Record<
  ReturnStatus,
  { label: string; variant: 'pending' | 'status' | 'approved' | 'error' }
> = {
  pending: { label: 'Pending Review', variant: 'pending' },
  'in-review': { label: 'In Review', variant: 'status' },
  completed: { label: 'Completed', variant: 'approved' },
  blocked: { label: 'Blocked', variant: 'error' },
}
function Confidence({ value }: { value: number }) {
  return (
    <span className={value >= 90 ? 'text-success' : value >= 75 ? 'text-warning' : 'text-error'}>
      {value}%
    </span>
  )
}
function QueueControls({
  filters,
  reviewers,
  onFiltersChange,
}: {
  filters: ReviewQueueFilters
  reviewers: string[]
  onFiltersChange: (filters: ReviewQueueFilters) => void
}) {
  const update = <K extends keyof ReviewQueueFilters>(key: K, value: ReviewQueueFilters[K]) =>
    onFiltersChange({ ...filters, [key]: value })
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-nowrap">
      <SearchInput
        value={filters.search}
        onChange={(event) => update('search', event.target.value)}
        aria-label="Search review queue"
        placeholder="Search returns, clients, reviewers, or status"
        className="w-full sm:min-w-64 lg:flex-1"
      />
      <Select
        value={filters.priority}
        onChange={(event) =>
          update('priority', event.target.value as ReviewQueueFilters['priority'])
        }
        aria-label="Filter by priority"
        className="w-full sm:w-32"
      >
        <option value="all">All priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>
      <Select
        value={filters.status}
        onChange={(event) => update('status', event.target.value as ReviewQueueFilters['status'])}
        aria-label="Filter by status"
        className="w-full sm:w-40"
      >
        <option value="all">All statuses</option>
        {Object.entries(statusBadges).map(([value, status]) => (
          <option key={value} value={value}>
            {status.label}
          </option>
        ))}
      </Select>
      <Select
        value={filters.reviewer}
        onChange={(event) => update('reviewer', event.target.value)}
        aria-label="Filter by reviewer"
        className="w-full sm:w-40"
      >
        <option value="all">All reviewers</option>
        {reviewers.map((reviewer) => (
          <option key={reviewer} value={reviewer}>
            {reviewer}
          </option>
        ))}
      </Select>
    </div>
  )
}
interface ReviewQueueProps {
  returns: ReviewQueueReturn[]
  filters: ReviewQueueFilters
  reviewers: string[]
  sort: { key: ReviewQueueSortKey; direction: SortDirection }
  onFiltersChange: (filters: ReviewQueueFilters) => void
  onSort: (key: ReviewQueueSortKey) => void
}
export function ReviewQueue({
  returns,
  filters,
  reviewers,
  sort,
  onFiltersChange,
  onSort,
}: ReviewQueueProps) {
  const columns: DataTableColumn<ReviewQueueReturn>[] = [
    {
      id: 'id',
      header: 'Return ID',
      onSort: () => onSort('id'),
      sortDirection: sort.key === 'id' ? sort.direction : 'none',
      cell: (row) => <span className="font-mono-token">{row.id}</span>,
    },
    {
      id: 'client',
      header: 'Client',
      cell: (row) => (
        <span className="block max-w-40 truncate font-medium sm:max-w-56">{row.clientName}</span>
      ),
    },
    {
      id: 'priority',
      header: 'Priority',
      cell: (row) => (
        <Badge className={priorityBadges[row.priority].className}>
          {priorityBadges[row.priority].label}
        </Badge>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      cell: (row) => (
        <Badge variant={statusBadges[row.status].variant}>{statusBadges[row.status].label}</Badge>
      ),
    },
    {
      id: 'confidence',
      header: 'AI Confidence',
      onSort: () => onSort('confidence'),
      sortDirection: sort.key === 'confidence' ? sort.direction : 'none',
      cell: (row) => <Confidence value={row.aiConfidence} />,
    },
    {
      id: 'assigned',
      header: 'Assigned To',
      cell: (row) => (
        <span className="flex min-w-0 items-center gap-2">
          <Avatar
            fallback={row.assignedTo.initials}
            alt={row.assignedTo.name}
            size="xs"
            src={row.assignedTo.avatarUrl}
          />
          <span className="truncate">{row.assignedTo.name}</span>
        </span>
      ),
    },
    {
      id: 'action',
      header: 'Action',
      cell: (row) => (
        <Button asChild variant="link" size="sm" aria-label={`Review ${row.id}`}>
          <Link to={reviewWorkspaceRoute(row.id)}>
            Review
            <ArrowRight className="size-3" aria-hidden="true" />
          </Link>
        </Button>
      ),
    },
  ]
  return (
    <Card>
      <CardHeader>
        <div>
          <h2 className="text-h3">Review Queue</h2>
          <p className="mt-1 text-body text-muted-foreground">Returns awaiting your attention.</p>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          rows={returns}
          getRowId={(item) => item.id}
          emptyMessage="No returns match the current filters."
          showSearch={false}
          toolbar={
            <QueueControls
              filters={filters}
              reviewers={reviewers}
              onFiltersChange={onFiltersChange}
            />
          }
        />
      </CardContent>
    </Card>
  )
}
