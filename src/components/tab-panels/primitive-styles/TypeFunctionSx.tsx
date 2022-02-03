import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { BrandSwatch } from '../../../style'
import { ApiFunctionAlias } from '../data-types/typeAliases'
import { DataTypeLabelSx } from '.'

const FunctionTypographyStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypeFunction',
    slot: 'style'
  }
)(({ theme }) => ({
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

export default function TypeFunctionSx({
  index,
  value,
  dataKey,
  dataType,
  association
}: ApiFunctionAlias) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      exit='removed'>
      {association === 'json' ? (
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
    </motion.div>
  )
}
