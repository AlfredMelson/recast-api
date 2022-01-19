import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

type TextAnimationAlias = {
  text: string
  layoutId: string
}

export const TextAnimation = ({ text, layoutId }: TextAnimationAlias) => {
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
    <motion.div layoutId={layoutId} initial='hidden' animate='visible' variants={sentence}>
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
