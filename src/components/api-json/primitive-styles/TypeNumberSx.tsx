import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { BrandSwatch } from '../../../style'
import { ApiNumberAlias } from '../data-types/typeAliases'
import { DataTypeLabelSx } from '.'

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

export default function TypeNumberSx({ index, value, dataKey, dataType, variant }: ApiNumberAlias) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      exit='removed'>
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
    </motion.div>
  )
}
