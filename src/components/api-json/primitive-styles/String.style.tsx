import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { ApiStringAlias } from '../data-types/typeAliases'

const StringTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'String',
    slot: 'typography'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

const StringSpanStyle = styled('span', {
  name: 'String',
  slot: 'typography-span'
})(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Green[400] : BrandSwatch.Light.Green[500]
}))

type StringSpanSxAlias = {
  text: string
}

function StringSpanSx({ text }: StringSpanSxAlias) {
  return <StringSpanStyle>&#34;{text}&#34;</StringSpanStyle>
}

export function TypeString({ value, dataKey }: ApiStringAlias) {
  return (
    <StringTypography>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <StringSpanSx text={value} />
    </StringTypography>
  )
}
