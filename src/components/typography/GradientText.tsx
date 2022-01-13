import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

const GradientText = styled('span')(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(to top, ${BrandSwatch.Dark.Blue[400]}, ${BrandSwatch.Dark.Blue[700]})`
      : `linear-gradient(to bottom, ${BrandSwatch.Light.Blue[400]}, ${BrandSwatch.Light.Blue[700]})`,
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}))

export default GradientText
