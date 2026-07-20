import type { Transition, Variants } from 'framer-motion'

export const motionTransition: Transition = { duration: 0.2, ease: 'easeOut' }
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: motionTransition },
}
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: motionTransition },
}
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: motionTransition },
}
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: motionTransition },
}
export const pageTransition = slideUp
export const cardHover = { y: -2, transition: motionTransition }
export const modalOpen = scaleIn
