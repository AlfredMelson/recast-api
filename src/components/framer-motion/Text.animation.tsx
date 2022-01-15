import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

type TextAnimationAlias = {
  text: string
}

export const TextAnimation = ({ text }: TextAnimationAlias) => {
  const sentence = {
    hidden: {
      opacity: 1
    },
    visible: {
      transition: {
        opacity: 1,
        staggerChildren: 0.005
      }
    }
  }

  const letter = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <motion.div initial='hidden' animate='visible' variants={sentence}>
      <Typography variant='body2' sx={{ color: theme => theme.palette.text.primary }}>
        {text.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          )
        })}
      </Typography>
    </motion.div>
  )
}
