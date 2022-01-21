import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'
import { FadeUpAnimation } from '../framer-motion'

const HeroSxStyle = styled(Card, { name: 'Hero', slot: 'style' })(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200]
}))

const HeroContentSxStyle = styled(CardContent, { name: 'HeroContent', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 20, 20)
  })
)

type HeroSxAlias = {
  children: React.ReactNode
}

export default function HeroSx({ children }: HeroSxAlias) {
  return (
    <FadeUpAnimation>
      <HeroSxStyle>
        <HeroContentSxStyle>{children}</HeroContentSxStyle>
      </HeroSxStyle>
    </FadeUpAnimation>
  )
}
