import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/helpers'
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  status?: 'online' | 'away' | 'busy' | 'offline'
}
export function Avatar({
  fallback,
  size = 'md',
  status,
  className,
  src,
  alt,
  ...props
}: AvatarProps) {
  const dimensions = { xs: 'size-6', sm: 'size-7', md: 'size-9', lg: 'size-11', xl: 'size-14' }[
    size
  ]
  const colors = {
    online: 'bg-success',
    away: 'bg-warning',
    busy: 'bg-error',
    offline: 'bg-muted-foreground',
  }
  const content = src ? (
    <img
      src={src}
      alt={alt ?? ''}
      className={cn('rounded-pill object-cover', dimensions, className)}
      {...props}
    />
  ) : (
    <span
      aria-label={alt}
      className={cn(
        'inline-flex items-center justify-center rounded-pill bg-secondary text-xs font-medium',
        dimensions,
        className,
      )}
    >
      {fallback.slice(0, 2).toUpperCase()}
    </span>
  )
  return (
    <span className="relative inline-flex">
      {content}
      {status && (
        <span
          aria-label={status}
          className={cn(
            'absolute bottom-0 right-0 size-2.5 rounded-pill border-2 border-card',
            colors[status],
          )}
        />
      )}
    </span>
  )
}
