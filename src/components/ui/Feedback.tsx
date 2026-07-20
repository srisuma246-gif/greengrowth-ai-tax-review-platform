import type { HTMLAttributes } from 'react'
import { AlertCircle, Inbox, LoaderCircle } from 'lucide-react'
import { cn } from '@/utils/helpers'
import { cva, type VariantProps } from 'class-variance-authority'
const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
  variants: {
    variant: {
      text: 'h-4 w-full',
      button: 'h-10 w-24',
      card: 'h-36 w-full',
      tableRow: 'h-12 w-full',
      avatar: 'size-9 rounded-pill',
      dashboardCard: 'h-32 w-full',
    },
  },
  defaultVariants: { variant: 'text' },
})
interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}
export function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant }), className)} {...props} />
}
export function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn('border-0 border-t', className)} {...props} />
}
export function EmptyState({
  title = 'No results',
  description,
  className,
}: {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2 rounded-lg border border-dashed p-8 text-center',
        className,
      )}
    >
      <Inbox className="size-6 text-muted-foreground" />
      <p className="text-h4">{title}</p>
      {description && <p className="text-body text-muted-foreground">{description}</p>}
    </div>
  )
}
export function LoadingState({
  label = 'Loading',
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 p-8 text-sm text-muted-foreground',
        className,
      )}
    >
      <LoaderCircle className="size-4 animate-spin" />
      {label}
    </div>
  )
}
export function ErrorState({
  title = 'Something went wrong',
  description,
  className,
}: {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center gap-2 rounded-lg border border-error/30 p-8 text-center',
        className,
      )}
    >
      <AlertCircle className="size-6 text-error" />
      <p className="text-h4">{title}</p>
      {description && <p className="text-body text-muted-foreground">{description}</p>}
    </div>
  )
}
