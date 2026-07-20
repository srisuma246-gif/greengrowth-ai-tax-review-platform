import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/helpers'
const badgeVariants = cva('inline-flex items-center rounded-pill px-2 py-0.5 text-xs font-medium', {
  variants: {
    variant: {
      default: 'bg-secondary text-secondary-foreground',
      success: 'bg-success/15 text-success',
      warning: 'bg-warning/15 text-warning',
      error: 'bg-error/15 text-error',
      pending: 'bg-warning/15 text-warning',
      draft: 'bg-muted text-muted-foreground',
      approved: 'bg-success/15 text-success',
      rejected: 'bg-error/15 text-error',
      ai: 'bg-ai-secondary text-ai-primary',
      priority: 'bg-error/15 text-error',
      status: 'bg-info/15 text-info',
    },
  },
  defaultVariants: { variant: 'default' },
})
interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
