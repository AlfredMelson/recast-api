import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type FadeAnimationAlias = {
  children: ReactNode
  layoutId?: string
  delay?: number
  duration?: number
}

export default function FadeAnimation({
  children,
  layoutId,
  delay,
  duration = 0.5
}: FadeAnimationAlias) {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <motion.div
      layoutId={layoutId}
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{
        ease: 'easeInOut',
        delay: delay,
        duration: duration
      }}>
      {children}
    </motion.div>
  )
}
