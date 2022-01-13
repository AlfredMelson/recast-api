import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

type CardSxAlias = {
  children: React.ReactNode
  title?: string
}

export function CardSx({ title, children }: CardSxAlias) {
  return (
    <Card sx={{ minHeight: 104 }}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  )
}
