import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

type FadeAnimationAlias = {
  children: React.ReactNode
  layoutId?: string
  duration?: number
}

export const FadeAnimation = ({ children, layoutId, duration = 0.3 }: FadeAnimationAlias) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layoutId={layoutId}
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          ease: 'easeInOut',
          duration: duration
        }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
