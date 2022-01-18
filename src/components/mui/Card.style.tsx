import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'
import { FadeUpAnimation } from '../framer-motion'

const CardSxStyle = styled(Card, { name: 'CardSx', slot: 'style' })(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default
}))

const CardHeaderSxStyle = styled(CardHeader, { name: 'CardHeaderSx', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(10, 16, 0)
  })
)
const CardContentSxStyle = styled(CardContent, { name: 'CardContentSx', slot: 'style' })(
  ({ theme }) => ({
    ':last-child': {
      padding: theme.spacing(10)
    }
  })
)

type CardSxAlias = {
  children: React.ReactNode
  title?: string
}

export function CardSx({ title, children }: CardSxAlias) {
  return (
    <CardSxStyle>
      <CardHeaderSxStyle title={title} />
      <CardContentSxStyle>{children}</CardContentSxStyle>
    </CardSxStyle>
  )
}

const HeroSxStyle = styled(Card, { name: 'HeroSx', slot: 'style' })(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200]
}))

const HeroContentSxStyle = styled(CardContent, { name: 'HeroContentSx', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 20, 20)
  })
)

type HeroSxAlias = {
  children: React.ReactNode
}

export function HeroSx({ children }: HeroSxAlias) {
  return (
    <FadeUpAnimation>
      <HeroSxStyle>
        <HeroContentSxStyle>{children}</HeroContentSxStyle>
      </HeroSxStyle>
    </FadeUpAnimation>
  )
}
