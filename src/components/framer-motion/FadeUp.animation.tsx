import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type FadeAnimationAlias = {
  children: ReactNode
  layoutId?: string
}

export default function FadeUpAnimation({ children, layoutId }: FadeAnimationAlias) {
  const animations = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
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
        type: 'spring',
        stiffness: 60
      }}>
      {children}
    </motion.div>
  )
}
