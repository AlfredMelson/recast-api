import { motion } from 'framer-motion'
import * as React from 'react'

type SlideUpAnimationAlias = {
  children: React.ReactNode
  layoutId?: string
  startY?: number
  endY?: number
}

export default function SlideUpAnimation({
  children,
  layoutId,
  startY,
  endY
}: SlideUpAnimationAlias) {
  const animations = {
    initial: { opacity: 0, y: startY },
    animate: { opacity: 1, y: endY },
    exit: { opacity: 0, y: startY }
  }

  return (
    <motion.div
      layoutId={layoutId}
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{
        type: 'easeIn',
        duration: 0.3
      }}>
      {children}
    </motion.div>
  )
}
