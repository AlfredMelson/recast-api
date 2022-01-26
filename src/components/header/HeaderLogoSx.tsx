import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { BrandSwatch } from '../../style'
import { SlideUpAnimation } from '../framer-motion'

export const HeaderLogoStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  { name: 'HeaderLogo', slot: 'style' }
)(() => ({
  fontWeight: 700,
  fontSize: '24px',
  color: BrandSwatch.Dark.Green[400]
}))

interface HeaderLogoSx {
  animate: boolean
}

export default function HeaderLogoSx({ animate }: HeaderLogoSx) {
  return (
    <Box>
      {!animate && (
        <SlideUpAnimation startY={-30} endY={0}>
          <HeaderLogoStyle>Recast</HeaderLogoStyle>
        </SlideUpAnimation>
      )}
    </Box>
  )
}
