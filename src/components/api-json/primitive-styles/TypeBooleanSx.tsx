import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { DataTypeLabelSx } from '../data-types'
import { ApiBooleanAlias } from '../data-types/typeAliases'

const BooleanTypographyStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeBoolean',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[500] : BrandSwatch.Light.Blue[500]
}))

interface BooleanTypography {
  dataKey: string | number
}

function BooleanTypography({ dataKey }: BooleanTypography) {
  return <BooleanTypographyStyle>&#34;{dataKey}&#34;&#58;&nbsp;</BooleanTypographyStyle>
}

const BooleanSpanTrueStyle = styled('span', {
  name: 'BooleanSpan',
  slot: 'true-style'
})(({ theme }) => ({
  ...theme.typography.code,
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Green[500] : BrandSwatch.Light.Green[500]
}))

interface BooleanSpan {
  text: []
}

function BooleanSpanTrue({ text }: BooleanSpan) {
  return <BooleanSpanTrueStyle>{text}</BooleanSpanTrueStyle>
}

const BooleanSpanFalseStyle = styled('span', {
  name: 'BooleanSpan',
  slot: 'false-style'
})(({ theme }) => ({
  ...theme.typography.code,
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Red[500] : BrandSwatch.Light.Red[500]
}))

function BooleanSpanFalse({ text }: BooleanSpan) {
  return <BooleanSpanFalseStyle>{text}</BooleanSpanFalseStyle>
}

export default function TypeBooleanSx({ value, dataKey, dataType, variant }: ApiBooleanAlias) {
  return (
    <>
      {variant === 'json' ? (
        <Stack direction='row'>
          <BooleanTypography dataKey={dataKey} />
          {value ? <BooleanSpanTrue text={value} /> : <BooleanSpanFalse text={value} />}
        </Stack>
      ) : (
        <Stack direction='row'>
          <BooleanTypography dataKey={dataKey} />
          <DataTypeLabelSx type={dataType} association='typescript' />
        </Stack>
      )}
    </>
  )
}
