import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'
export function PageHeader({
  title,
  description,
  actions,
  className,
}: {
  title: string
  description?: string
  actions?: ReactNode
  className?: string
}) {
  return (
    <header className={cn('flex flex-wrap items-start justify-between gap-4', className)}>
      <div>
        <h1 className="text-h1">{title}</h1>
        {description && <p className="mt-1 text-body text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}
export function SectionHeader({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-h3">{title}</h2>
        {description && <p className="mt-1 text-body text-muted-foreground">{description}</p>}
      </div>
      {action}
    </header>
  )
}
