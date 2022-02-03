import Box from '@mui/material/Box'
import { HeaderLogoStyle } from './HeaderLogo'
import { MobileHeaderIconGrid } from '.'

export default function MobileHeaderContents() {
  return (
    <>
      <Box
        sx={{
          gridRow: 1,
          gridColumn: 1,
          alignSelf: 'center',
          justifySelf: 'start'
        }}>
        <HeaderLogoStyle>Recast</HeaderLogoStyle>
      </Box>
      <Box sx={{ gridColumn: 2, gridRow: 1, placeSelf: 'center' }}>
        <MobileHeaderIconGrid />
      </Box>
    </>
  )
}
