import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'

const CardSxStyle = styled(Card, { name: 'Card', slot: 'style' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    display: { xs: 'block', sm: 'block', md: 'inline', lg: 'inline' },
    width: '100%'
  }
}))

const CardHeaderSxStyle = styled(CardHeader, { name: 'CardHeader', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(10, 16, 0),
    color: theme.palette.text.primary
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
    <CardSxStyle>
      <CardHeaderSxStyle title={title} />
      <CardContentSxStyle>{children}</CardContentSxStyle>
    </CardSxStyle>
  )
}
