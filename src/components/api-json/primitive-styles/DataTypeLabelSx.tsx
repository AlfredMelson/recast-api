import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'

const EditLabelStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'EditLabel',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[400] : BrandSwatch.Light.Grey[600]
}))
const TypescriptLabelStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  {
    name: 'TypescriptLabel',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[400] : BrandSwatch.Light.Blue[500]
}))

interface DataTypeLabelSx {
  type: string
  association?: 'edit' | 'typescript'
}
export default function DataTypeLabelSx({ type, association }: DataTypeLabelSx) {
  return (
    <>
      {association === 'edit' ? (
        <EditLabelStyle>{type}&nbsp;</EditLabelStyle>
      ) : (
        <TypescriptLabelStyle>{type}&nbsp;</TypescriptLabelStyle>
      )}
    </>
  )
}
