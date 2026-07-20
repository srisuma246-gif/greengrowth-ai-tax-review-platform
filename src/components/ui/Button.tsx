import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/helpers'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-muted',
        outline: 'border bg-transparent hover:bg-secondary',
        ghost: 'hover:bg-secondary',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-error text-white hover:opacity-90',
        success: 'bg-success text-white hover:opacity-90',
        icon: 'bg-transparent hover:bg-secondary',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-11 px-5',
        xl: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean
  fullWidth?: boolean
  asChild?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children?: ReactNode
}
export function Button({
  className,
  variant,
  size,
  loading = false,
  fullWidth = false,
  disabled,
  asChild = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion()
  const sharedClassName = cn(buttonVariants({ variant, size }), fullWidth && 'w-full', className)

  if (asChild) {
    return (
      <Slot className={sharedClassName} {...props}>
        {children}
      </Slot>
    )
  }

  return (
    <motion.span
      className="inline-flex"
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <button
        className={sharedClassName}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    </motion.span>
  )
}
