import { useEffect, useId, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
function useEscape(open: boolean, onOpenChange: (value: boolean) => void) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false)
    }
    if (open) window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [open, onOpenChange])
}
interface OverlayProps extends PropsWithChildren {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  footer?: ReactNode
}
interface DrawerProps extends PropsWithChildren {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
}
export function Dialog({ open, onOpenChange, title, description, footer, children }: OverlayProps) {
  useEscape(open, onOpenChange)
  if (!open) return null
  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/30 p-4"
      onMouseDown={() => onOpenChange(false)}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-lg rounded-xl bg-card p-6 shadow-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-h3">{title}</h2>
            {description && <p className="mt-1 text-body text-muted-foreground">{description}</p>}
          </div>
          <Button
            variant="icon"
            size="icon"
            aria-label="Close dialog"
            onClick={() => onOpenChange(false)}
          >
            <X className="size-4" />
          </Button>
        </header>
        <div className="py-5">{children}</div>
        {footer && <footer className="flex justify-end gap-2">{footer}</footer>}
      </section>
    </div>
  )
}
export function Drawer({ open, onOpenChange, title, children, description }: DrawerProps) {
  useEscape(open, onOpenChange)
  const reduceMotion = useReducedMotion()
  const dialogRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const descriptionId = useId()
  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus()
      return undefined
    }
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const frame = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        ?.focus()
    })
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', trapFocus)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', trapFocus)
    }
  }, [open])
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-foreground/30"
          onMouseDown={() => onOpenChange(false)}
        >
          <motion.aside
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descriptionId : undefined}
            initial={reduceMotion ? false : { x: 320 }}
            animate={reduceMotion ? undefined : { x: 0 }}
            exit={reduceMotion ? undefined : { x: 320 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="ml-auto flex h-full w-full max-w-none flex-col bg-card p-4 shadow-floating sm:p-6 md:w-[65vw] xl:w-[45vw]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between">
              <div>
                <h2 id={titleId} className="text-h3">
                  {title}
                </h2>
                {description && (
                  <p id={descriptionId} className="mt-1 text-body-sm text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
              <Button
                variant="icon"
                size="icon"
                aria-label="Close drawer"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-4" />
              </Button>
            </header>
            <div className="py-5">{children}</div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export function Tooltip({ content, children }: { content: string; children: ReactNode }) {
  return (
    <span className="inline-flex" title={content}>
      {children}
    </span>
  )
}
