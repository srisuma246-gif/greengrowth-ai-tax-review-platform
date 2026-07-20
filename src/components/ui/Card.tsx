import { cva, type VariantProps } from 'class-variance-authority'
import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/helpers'
const cardVariants = cva('rounded-lg border bg-card text-foreground shadow-card', {
  variants: {
    variant: {
      standard: '',
      outlined: 'shadow-none',
      kpi: 'p-5',
      summary: 'p-6',
      interactive: 'p-5 transition-shadow hover:shadow-hover',
      empty: 'border-dashed p-8',
      elevated: 'p-6 shadow-hover',
    },
  },
  defaultVariants: { variant: 'standard' },
})
interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}
export function Card({ className, variant, ...props }: CardProps) {
  const reduceMotion = useReducedMotion()
  if (variant === 'interactive')
    return (
      <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} transition={{ duration: 0.2 }}>
        <div className={cn(cardVariants({ variant }), className)} {...props} />
      </motion.div>
    )
  return <div className={cn(cardVariants({ variant }), className)} {...props} />
}
export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-5 pb-0', className)} {...props} />
}
export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-5', className)} {...props} />
}
export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center p-5 pt-0', className)} {...props} />
}
export function CardActions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center gap-2', className)} {...props} />
}
