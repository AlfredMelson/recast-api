import Box from '@mui/material/Box'
import { HeaderLogo, HeaderMobileIcons } from '../components/header'

export function HeaderMobile() {
  return (
    <Box
      sx={{
        minHeight: 60,
        display: { xs: 'grid', md: 'none' },
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1
      }}>
      <Box
        sx={{
          gridRow: 1,
          gridColumn: 1,
          alignSelf: 'center',
          justifySelf: 'start',
          pl: 20
        }}>
        <HeaderLogo />
      </Box>
      <Box
        sx={{
          gridRow: 1,
          gridColumn: 2,
          alignSelf: 'center',
          justifySelf: 'end',
          pr: 20
        }}>
        <HeaderMobileIcons />
      </Box>
    </Box>
  )
}
