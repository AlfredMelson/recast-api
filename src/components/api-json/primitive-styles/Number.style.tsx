import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { ApiNumberAlias } from '../data-types/typeAliases'

const NumberTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'Number',
    slot: 'typography'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

const NumberSpanStyle = styled('span', {
  name: 'Number',
  slot: 'typography-span'
})(({ theme }) => ({
  color:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Purple[400] : BrandSwatch.Light.Purple[500]
}))

type NumberSpanSxAlias = {
  text: number
}

function NumberSpanSx({ text }: NumberSpanSxAlias) {
  return <NumberSpanStyle>{text}</NumberSpanStyle>
}

export function TypeNumber({ value, dataKey }: ApiNumberAlias) {
  return (
    <NumberTypography>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <NumberSpanSx text={value} />
    </NumberTypography>
  )
}
