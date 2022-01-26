import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'
import { BrandSwatch } from '../../style'
import { FadeUpAnimation } from '../framer-motion'

const HeroStyle = styled(Card, { name: 'Hero', slot: 'style' })(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0)
  }
}))

const HeroContainerStyle = styled(CardContent, { name: 'HeroContainer', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 0, 20, 20),
    [theme.breakpoints.down('sm')]: {
      borderRadius: theme.spacing(0),
      padding: theme.spacing(10)
    }
  })
)

type HeroSxAlias = {
  children: ReactNode
}

export default function HeroSx({ children }: HeroSxAlias) {
  return (
    <FadeUpAnimation>
      <HeroStyle>
        <HeroContainerStyle>{children}</HeroContainerStyle>
      </HeroStyle>
    </FadeUpAnimation>
  )
}
