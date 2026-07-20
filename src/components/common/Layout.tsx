import type { HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/utils/helpers'
export function PageContainer({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <main className={cn('mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8', className)}>
      {children}
    </main>
  )
}
export function ContentContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-5xl', className)} {...props} />
}
export function ResponsiveGrid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)} {...props} />
}
export function SidebarContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-6 lg:grid-cols-[16rem_1fr]', className)} {...props} />
}
export function TopNavigationContainer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn('flex min-h-14 items-center border-b bg-surface px-4 sm:px-6', className)}
      {...props}
    />
  )
}
export function PageSection({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn('space-y-4', className)} {...props} />
}
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-screen-xl px-4 sm:px-6', className)} {...props} />
}
export function Stack({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-4', className)} {...props} />
}
export function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-4', className)} {...props} />
}
