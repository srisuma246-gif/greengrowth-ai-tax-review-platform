import { Search } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/helpers'

type FieldState = 'default' | 'error' | 'success'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: FieldState
  helperText?: string
}
export function Input({ className, state = 'default', helperText, id, ...props }: InputProps) {
  const helperId = helperText && id ? `${id}-helper` : undefined
  return (
    <div className="space-y-1">
      <input
        id={id}
        aria-describedby={helperId}
        aria-invalid={state === 'error' || undefined}
        className={cn(
          'flex h-10 w-full rounded-md border bg-surface px-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          state === 'error' && 'border-error',
          state === 'success' && 'border-success',
          className,
        )}
        {...props}
      />
      {helperText && (
        <p
          id={helperId}
          className={cn(
            'text-body-sm',
            state === 'error'
              ? 'text-error'
              : state === 'success'
                ? 'text-success'
                : 'text-muted-foreground',
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}
export function SearchInput({ className, ...props }: InputProps) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3 top-5 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <Input type="search" className={cn('pl-9', className)} {...props} />
    </div>
  )
}
