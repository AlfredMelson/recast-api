import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { ApiBooleanAlias } from '../data-types/typeAliases'

const BooleanTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'Boolean',
    slot: 'typography'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[500] : BrandSwatch.Light.Blue[500]
}))

const BooleanSpanTrueStyle = styled('span', {
  name: 'Boolean',
  slot: 'span-true'
})(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Green[500] : BrandSwatch.Light.Green[500]
}))

type BooleanSpanTrueSxAlias = {
  text: []
}

function BooleanSpanTrueSx({ text }: BooleanSpanTrueSxAlias) {
  return <BooleanSpanTrueStyle>{text}</BooleanSpanTrueStyle>
}

const BooleanSpanFalseStyle = styled('span', {
  name: 'Boolean',
  slot: 'span-false'
})(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Red[500] : BrandSwatch.Light.Red[500]
}))

type BooleanSpanFalseSxAlias = {
  text: []
}

function BooleanSpanFalseSx({ text }: BooleanSpanFalseSxAlias) {
  return <BooleanSpanFalseStyle>{text}</BooleanSpanFalseStyle>
}

export function TypeBoolean({ value, dataKey }: ApiBooleanAlias) {
  return (
    <BooleanTypography>
      &#34;{dataKey}&#34;&#58;&nbsp;
      {value ? <BooleanSpanTrueSx text={value} /> : <BooleanSpanFalseSx text={value} />}
    </BooleanTypography>
  )
}
