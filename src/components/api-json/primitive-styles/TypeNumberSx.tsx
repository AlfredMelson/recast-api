import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { DataTypeLabelSx } from '../data-types'
import { ApiNumberAlias } from '../data-types/typeAliases'

const NumberTypographyStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeNumber',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.text.primary
}))

interface NumberTypography {
  dataKey: string | number
}

function NumberTypography({ dataKey }: NumberTypography) {
  return <NumberTypographyStyle>&#34;{dataKey}&#34;&#58;&nbsp;</NumberTypographyStyle>
}

const NumberSpanStyle = styled('span', {
  name: 'NumberSpan',
  slot: 'style'
})(({ theme }) => ({
  ...theme.typography.code,
  color:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Purple[400] : BrandSwatch.Light.Purple[500]
}))

interface NumberSpan {
  text: number
}

function NumberSpan({ text }: NumberSpan) {
  return <NumberSpanStyle>{text}</NumberSpanStyle>
}

export default function TypeNumberSx({ value, dataKey, dataType, variant }: ApiNumberAlias) {
  return (
    <>
      {variant === 'json' ? (
        <>
          <NumberTypography dataKey={dataKey} />
          <NumberSpan text={value} />
        </>
      ) : (
        <>
          <NumberTypography dataKey={dataKey} />
          <DataTypeLabelSx type={dataType} association='typescript' />
        </>
      )}
    </>
  )
}
