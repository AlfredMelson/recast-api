import { SxProps } from '@mui/material'
import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import * as React from 'react'
import { BrandSwatch } from '../../style'

const PaperStyle = styled((props?: PaperProps) => <Paper {...props} />, {
  name: 'Paper',
  slot: 'style'
})(({ theme }) => ({
  backgroundImage: 'none',
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
  padding: theme.spacing(30, 0, 30, 50),
  overflow: 'hidden'
}))

type PaperSxAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSx = ({ children, onClick, ...props }: PaperSxAlias) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <PaperStyle onClick={onClick} {...props}>
        {children}
      </PaperStyle>
    </motion.div>
  )
}
