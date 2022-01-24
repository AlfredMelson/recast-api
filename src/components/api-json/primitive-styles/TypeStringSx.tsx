import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { DataTypeLabelSx } from '../data-types'
import { ApiStringAlias } from '../data-types/typeAliases'

const StringTypographyStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeString',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

interface StringTypography {
  dataKey: string | number
}

function StringTypography({ dataKey }: StringTypography) {
  return <StringTypographyStyle>&#34;{dataKey}&#34;&#58;&nbsp;</StringTypographyStyle>
}

const StringSpanStyle = styled('span', {
  name: 'StringSpan',
  slot: 'style'
})(({ theme }) => ({
  ...theme.typography.code,
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Green[200] : BrandSwatch.Light.Green[500]
}))

interface StringSpan {
  text: string
}

function StringSpan({ text }: StringSpan) {
  return <StringSpanStyle>&#34;{text}&#34;</StringSpanStyle>
}

export default function TypeStringSx({ value, dataKey, variant, dataType }: ApiStringAlias) {
  return (
    <>
      {variant === 'json' ? (
        <>
          <StringTypography dataKey={dataKey} />
          <StringSpan text={value} />
        </>
      ) : (
        <>
          <StringTypography dataKey={dataKey} />
          <DataTypeLabelSx type={dataType} association='typescript' />
        </>
      )}
    </>
  )
}
