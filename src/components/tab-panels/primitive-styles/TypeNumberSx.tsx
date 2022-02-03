import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { BrandSwatch } from '../../../style'
import { ApiNumberAlias } from '../data-types/typeAliases'
import { DataTypeLabelSx } from '.'

interface NumberTypography {
  dataKey: string | number
}

function NumberTypography({ dataKey }: NumberTypography) {
  return (
    <Typography variant='code' sx={{ color: ({ palette }) => palette.text.primary }}>
      &#34;{dataKey}&#34;&#58;&nbsp;
    </Typography>
  )
}

const NumberSpanStyle = styled('span', {
  name: 'NumberSpan',
  slot: 'style'
})(({ theme }) => ({
  ...theme.typography.code,
  color:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Purple[400] : BrandSwatch.Light.Purple[700]
}))

interface NumberSpan {
  text: number
}

function NumberSpan({ text }: NumberSpan) {
  return <NumberSpanStyle>{text}</NumberSpanStyle>
}

export default function TypeNumberSx({
  index,
  value,
  dataKey,
  dataType,
  association
}: ApiNumberAlias) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      exit='removed'>
      {association === 'json' ? (
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
