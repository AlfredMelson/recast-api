import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

const HeaderTitleStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  { name: 'HeaderTitle', slot: 'style' }
)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary
}))

export default function HeaderTitle() {
  return (
    <HeaderTitleStyle>
      Lightweight, interactive api response visualizer that infers type and accepts crud operations.
    </HeaderTitleStyle>
  )
}
