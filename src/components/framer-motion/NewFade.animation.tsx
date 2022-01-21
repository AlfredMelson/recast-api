import { motion } from 'framer-motion'
import * as React from 'react'

type NewFadeAnimationAlias = {
  children: React.ReactNode
}

export default function NewFadeUpAnimation({ children }: NewFadeAnimationAlias) {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{
        ease: 'easeInOut',
        delay: 0.2,
        duration: 0.2
      }}>
      {children}
    </motion.div>
  )
}
