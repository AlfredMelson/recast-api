import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { ApiValueProp } from '../data-types/typeAliases'

export const ArrayTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'Array',
    slot: 'typography'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

const ArraySpanStyle = styled('span', {
  name: 'Array',
  slot: 'typography-span'
})(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[400] : BrandSwatch.Light.Grey[600]
}))

type ArraySpanSxAlias = {
  text: Array<ApiValueProp>
}
//
// FIX
export function ArraySpanSx({ text }: ArraySpanSxAlias) {
  return <ArraySpanStyle>&#47;&#47;&nbsp;{text}</ArraySpanStyle>
}
