import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../style'

export const HeaderLogoStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  { name: 'HeaderLogo', slot: 'style' }
)(() => ({
  fontWeight: 700,
  fontSize: '26px',
  color: BrandSwatch.Dark.Green[400]
}))

export default function HeaderLogo() {
  return <HeaderLogoStyle>Recast</HeaderLogoStyle>
}
