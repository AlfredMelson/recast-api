import { SxProps } from '@mui/material'
import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { NewFadeUpAnimation } from '../framer-motion'

const PaperSxStyle = styled((props?: PaperProps) => <Paper elevation={2} {...props} />, {
  name: 'Paper',
  slot: 'style'
})(({ theme }) => ({
  padding: theme.spacing(30, 0, 30, 50),
  backgroundColor: 'transparent',

  maxHeight: 'calc(100vh - 539px )',
  overflowX: 'hidden',
  overflowY: 'scroll'
}))

type PaperSxAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSx = ({ children, onClick, ...props }: PaperSxAlias) => {
  return (
    <NewFadeUpAnimation>
      <PaperSxStyle onClick={onClick} {...props}>
        {children}
      </PaperSxStyle>
    </NewFadeUpAnimation>
  )
}
