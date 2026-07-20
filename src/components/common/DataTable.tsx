import type { ReactNode } from 'react'
import { EmptyState, Skeleton } from '@/components/ui/Feedback'
import { SearchInput } from '@/components/ui/Input'

export interface DataTableColumn<T> {
  id: string
  header: string
  cell: (row: T) => ReactNode
  onSort?: () => void
  sortDirection?: 'ascending' | 'descending' | 'none'
}
interface DataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]
  getRowId: (row: T) => string
  loading?: boolean
  emptyMessage?: string
  searchPlaceholder?: string
  toolbar?: ReactNode
  showSearch?: boolean
}
export function DataTable<T>({
  columns,
  rows,
  getRowId,
  loading = false,
  emptyMessage,
  searchPlaceholder = 'Search',
  toolbar,
  showSearch = true,
}: DataTableProps<T>) {
  return (
    <div className="space-y-3">
      {toolbar ??
        (showSearch && (
          <div className="flex justify-end">
            <SearchInput
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              className="max-w-xs"
            />
          </div>
        ))}
      <div className="max-w-full overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-secondary text-muted-foreground">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  scope="col"
                  aria-sort={column.sortDirection === 'none' ? undefined : column.sortDirection}
                  className="px-4 py-3 font-medium"
                >
                  {column.onSort ? (
                    <button type="button" onClick={column.onSort} className="hover:text-foreground">
                      {column.header}
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }, (_, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.id} className="px-4 py-3">
                        <Skeleton className="h-4 w-full" />
                      </td>
                    ))}
                  </tr>
                ))
              : rows.map((row) => (
                  <tr key={getRowId(row)} className="border-t">
                    {columns.map((column) => (
                      <td key={column.id} className="px-4 py-3">
                        {column.cell(row)}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
        {!loading && rows.length === 0 && (
          <EmptyState title={emptyMessage ?? 'No data available'} />
        )}
      </div>
      <div className="flex items-center justify-between text-body-sm text-muted-foreground">
        <span>Pagination</span>
        <span>Sorting available</span>
      </div>
    </div>
  )
}
