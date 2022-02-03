import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { BrandSwatch } from '../../../style'
import { ApiStringAlias } from '../data-types/typeAliases'
import { DataTypeLabelSx } from '.'

interface StringTypography {
  dataKey: string | number
}

function StringTypography({ dataKey }: StringTypography) {
  return (
    <Typography variant='code' sx={{ color: ({ palette }) => palette.text.primary }}>
      &#34;{dataKey}&#34;&#58;&nbsp;
    </Typography>
  )
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

export default function TypeStringSx({
  index,
  value,
  dataKey,
  association,
  dataType
}: ApiStringAlias) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}>
      {association === 'json' ? (
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
    </motion.div>
  )
}
