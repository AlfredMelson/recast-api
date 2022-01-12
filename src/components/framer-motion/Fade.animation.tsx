import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

/**
 * @checklist
 * @typescript (Y)
 * @testing ()
 *
 * @name FadeAnimation
 * @description styles mounting & unmonuting with fade animation
 * @param {AnimatePresence} framer-motion AnimatePresence
 * @param {motion} framer-motion motion
 * @return
 */

type FadeAnimationAlias = {
  children: React.ReactNode
  layoutId?: string
}

export const FadeAnimation = ({ children, layoutId }: FadeAnimationAlias) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  // const transitions = {
  //   ease: 'easeInOut',
  //   duration: 0.3,
  // }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layoutId={layoutId}
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        // transition={transitions}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
