import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/helpers'
export function Field({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-2', className)} {...props} />
}
export function Label({
  required = false,
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label className={cn('text-label', className)} {...props}>
      {children}
      {required && (
        <span aria-hidden="true" className="ml-1 text-error">
          *
        </span>
      )}
    </label>
  )
}
export function Description({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-body-sm text-muted-foreground', className)} {...props} />
}
export function ValidationMessage({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return children ? (
    <p role="alert" className={cn('text-body-sm text-error', className)}>
      {children}
    </p>
  ) : null
}
