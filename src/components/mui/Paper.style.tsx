import { SxProps } from '@mui/material'
import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'
import { NewFadeUpAnimation } from '../framer-motion'

const PaperSxStyle = styled((props?: PaperProps) => <Paper {...props} />, {
  name: 'Paper',
  slot: 'style'
})(({ theme }) => ({
  // backgroundColor: 'transparent',
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
  backgroundImage: 'none',
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
    <NewFadeUpAnimation>
      <PaperSxStyle onClick={onClick} {...props}>
        {children}
      </PaperSxStyle>
    </NewFadeUpAnimation>
  )
}
