import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/FormControls'
import type { DashboardSummary, WorkspaceInfo } from '@/features/dashboard/types'
import { fadeIn } from '@/utils/motion'
export function DashboardHeader({
  summary,
  workspace,
  onRefresh,
  refreshing = false,
}: {
  summary: DashboardSummary
  workspace: WorkspaceInfo
  onRefresh?: () => void
  refreshing?: boolean
}) {
  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between"
    >
      <div>
        <p className="text-h2">{summary.greeting}</p>
        <h1 className="mt-1 text-h1">{summary.title}</h1>
        <p className="mt-2 text-body-lg text-muted-foreground">{summary.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-body-sm text-muted-foreground">
          <span>{summary.lastUpdated}</span>
          <span>{summary.reviewPeriod}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          leftIcon={<RefreshCw className="size-4" />}
          aria-label="Refresh dashboard"
          loading={refreshing}
          disabled={refreshing}
          onClick={onRefresh}
        >
          Refresh
        </Button>
        <Select aria-label="Select workspace" className="w-44">
          <option value={workspace.id}>{workspace.name}</option>
        </Select>
      </div>
    </motion.header>
  )
}
