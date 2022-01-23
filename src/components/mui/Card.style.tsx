import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { alpha, styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'
import { NewFadeUpAnimation } from '../framer-motion'

const CardSxStyle = styled(Card, { name: 'Card', slot: 'style' })(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.background.default, 0.5)
      : alpha(BrandSwatch.Light.Grey[100], 0.8),
  boxShadow:
    theme.palette.mode === 'dark'
      ? 'inset 1px 1px 2px 0px rgba(0, 0, 0, 0.40)'
      : 'inset 1px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  [theme.breakpoints.down('sm')]: {
    display: { xs: 'block', md: 'inline' }
  }
}))

const CardHeaderSxStyle = styled(CardHeader, { name: 'CardHeader', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(10, 16, 0),
    '.MuiCardHeader-title': {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightMedium,
      color:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[300] : BrandSwatch.Light.Grey[700]
    }
  })
)
const CardContentSxStyle = styled(CardContent, { name: 'CardContent', slot: 'style' })(
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
    <NewFadeUpAnimation>
      <CardSxStyle>
        <CardHeaderSxStyle title={title} />
        <CardContentSxStyle>{children}</CardContentSxStyle>
      </CardSxStyle>
    </NewFadeUpAnimation>
  )
}
