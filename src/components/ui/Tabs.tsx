import type { ButtonHTMLAttributes, HTMLAttributes, KeyboardEvent } from 'react'
import { cn } from '@/utils/helpers'
export function Tabs({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
    const current = tabs.indexOf(document.activeElement as HTMLButtonElement)
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    event.preventDefault()
    tabs[next]?.focus()
  }
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={onKeyDown}
      className={cn('flex max-w-full gap-1 overflow-x-auto border-b', className)}
      {...props}
    />
  )
}
export function Tab({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      role="tab"
      className={cn(
        'border-b-2 border-transparent px-3 py-2 text-sm text-muted-foreground hover:text-foreground aria-selected:border-primary aria-selected:text-foreground',
        className,
      )}
      {...props}
    />
  )
}
