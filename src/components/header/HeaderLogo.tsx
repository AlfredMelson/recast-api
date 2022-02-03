import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import { themeColorAtom } from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { DarkModeLogo, LightModeLogo } from '../icons'

export const HeaderLogoStyle = styled(
  (props: TypographyProps) => <Typography variant='code' {...props} />,
  { name: 'HeaderLogo', slot: 'style' }
)(() => ({
  fontWeight: 700,
  fontSize: '26px',
  color: BrandSwatch.Dark.Green[400]
}))

export default function HeaderLogo() {
  const themeColor = useRecoilValue(themeColorAtom)

  if (themeColor === 'dark') {
    return (
      <Box sx={{ pt: 10 }}>
        <DarkModeLogo />
      </Box>
    )
  } else {
    return (
      <Box sx={{ pt: 10 }}>
        <LightModeLogo />
      </Box>
    )
  }
}
