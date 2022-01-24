import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { DataTypeLabelSx } from '../data-types'
import { ApiFunctionAlias } from '../data-types/typeAliases'

const FunctionTypographyStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeFunction',
    slot: 'style'
  }
)(({ theme }) => ({
  // color: theme.palette.text.primary
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[400] : BrandSwatch.Light.Blue[600]
}))

interface FunctionTypography {
  dataKey: string | number
}

function FunctionTypography({ dataKey }: FunctionTypography) {
  return <FunctionTypographyStyle>&#34;{dataKey}&#34;&#58;&nbsp;</FunctionTypographyStyle>
}

const FunctionSpanStyle = styled('span', {
  name: 'Function',
  slot: 'typography-span'
})(({ theme }) => ({
  ...theme.typography.code,
  color:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Purple[400] : BrandSwatch.Light.Purple[500]
}))

interface FunctionSpan {
  text: number
}

function FunctionSpan({ text }: FunctionSpan) {
  return <FunctionSpanStyle>&#34;{text}&#34;</FunctionSpanStyle>
}

export default function TypeFunctionSx({ value, dataKey, dataType, variant }: ApiFunctionAlias) {
  return (
    <>
      {variant === 'json' ? (
        <Stack direction='row'>
          <FunctionTypography dataKey={dataKey} />
          <FunctionSpan text={value} />
        </Stack>
      ) : (
        <Stack direction='row'>
          <FunctionTypography dataKey={dataKey} />
          <DataTypeLabelSx type={dataType} association='typescript' />
        </Stack>
      )}
    </>
  )
}
