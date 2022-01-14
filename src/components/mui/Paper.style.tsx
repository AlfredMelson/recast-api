import { SxProps } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { apiTabSelectedAtom } from '../../recoil'
import { BrandSwatch } from '../../style'
import { FadeAnimation } from '../framer-motion'

const PaperSxStyle = styled(Paper, { name: '', slot: '' })(({ theme }) => ({
  padding: theme.spacing(30, 0, 30, 50),
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[300],
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
  const apiTabSelected = useRecoilValue(apiTabSelectedAtom)
  return (
    <FadeAnimation layoutId={apiTabSelected}>
      <PaperSxStyle onClick={onClick} {...props}>
        {children}
      </PaperSxStyle>
    </FadeAnimation>
  )
}
