import { Variants, Transition } from 'motion/react'

/**
 * Standardized luxury cubic-bezier easing curves
 * Inspired by high-end architectural and fashion editorial sites
 */
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const
export const SMOOTH_EASE = [0.25, 1, 0.5, 1] as const

export const TRANSITION_STANDARD: Transition = {
  duration: 0.8,
  ease: LUXURY_EASE,
}

export const TRANSITION_FAST: Transition = {
  duration: 0.45,
  ease: LUXURY_EASE,
}

export const GENTLE_SPRING: Transition = {
  type: 'spring',
  damping: 24,
  stiffness: 120,
}

/**
 * Viewport entrance presets
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_STANDARD,
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_STANDARD,
  },
}

export const scaleReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_STANDARD,
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
}
