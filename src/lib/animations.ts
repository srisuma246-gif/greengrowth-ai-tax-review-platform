import type { Transition, Variants } from 'framer-motion'

export const motionTransition: Transition = { duration: 0.22, ease: 'easeOut' }
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: motionTransition },
  exit: { opacity: 0, transition: { duration: 0.16 } },
}
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: motionTransition },
  exit: { opacity: 0, y: 8, transition: { duration: 0.16 } },
}
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: motionTransition },
  exit: { opacity: 0, x: 20, transition: { duration: 0.16 } },
}
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } },
}
