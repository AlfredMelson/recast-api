import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { FadeUpAnimation } from '../../components/framer-motion'
import { BrandSwatch } from '../../style'

export const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 10, 10)
}))

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

export function HeroSx({ children }: HeroSxAlias) {
  return (
    <FadeUpAnimation>
      <HeroSxStyle>
        <HeroContentSxStyle>{children}</HeroContentSxStyle>
      </HeroSxStyle>
    </FadeUpAnimation>
  )
}
