import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { alpha, styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'
import { NewFadeUpAnimation } from '../framer-motion'

const CardStyle = styled((props: CardProps) => <Card {...props} />, {
  name: 'Card',
  slot: 'style'
})(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.background.default, 0.5)
      : alpha(BrandSwatch.Light.Grey[100], 0.8),
  boxShadow:
    theme.palette.mode === 'dark'
      ? 'inset 1px 1px 2px 0px rgba(0, 0, 0, 0.40)'
      : 'inset 1px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  '&:last-child': {
    marginRight: theme.spacing(30)
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(30)
  }
}))

const CardHeaderStyle = styled(CardHeader, { name: 'CardHeader', slot: 'style' })(({ theme }) => ({
  padding: theme.spacing(10, 20),
  '.MuiCardHeader-title': {
    paddingLeft: theme.spacing(10),
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[300] : BrandSwatch.Light.Grey[700]
  }
}))

const CardContentStyle = styled(CardContent, { name: 'CardContent', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 20),
    margin: theme.spacing(0),
    '&:last-child': {
      padding: theme.spacing(0, 20, 10),
      margin: theme.spacing(0)
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
      <CardStyle>
        <CardHeaderStyle title={title} />
        <CardContentStyle>{children}</CardContentStyle>
      </CardStyle>
    </NewFadeUpAnimation>
  )
}
