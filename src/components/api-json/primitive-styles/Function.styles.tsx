import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'
import { ApiFunctionAlias } from '../data-types/typeAliases'

const FunctionTypography = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'Function',
    slot: 'typography'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[400] : BrandSwatch.Light.Blue[600]
}))

const FunctionSpanStyle = styled('span', {
  name: 'Function',
  slot: 'typography-span'
})(({ theme }) => ({
  color: theme.palette.text.primary
}))

type FunctionSpanSxAlias = {
  text: string
}

function FunctionSpanSx({ text }: FunctionSpanSxAlias) {
  return <FunctionSpanStyle>&#34;{text}&#34;</FunctionSpanStyle>
}

export function TypeFunction({ dataKey }: ApiFunctionAlias) {
  return (
    <FunctionTypography>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <FunctionSpanSx text='&#91;&nbsp;&#402;&nbsp;&#93;' />
    </FunctionTypography>
  )
}
