import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { alpha, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { HeaderContents, MobileHeaderContents } from '.'

export default function NavBarHeader() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  if (mobile) {
    return (
      <AppBar
        sx={{
          py: 10,
          bgcolor: ({ palette }) => alpha(palette.background.default, 0.4),
          backdropFilter: 'blur(12px)'
        }}
        className='standalone-header'>
        <Container maxWidth='md' disableGutters>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 120px',
              px: 20
            }}>
            <MobileHeaderContents />
          </Box>
        </Container>
      </AppBar>
    )
  } else
    return (
      <AppBar
        sx={{
          py: 14,
          bgcolor: ({ palette }) => alpha(palette.background.default, 0.4),
          backdropFilter: 'blur(12px)'
        }}>
        <Container maxWidth='lg' disableGutters>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 176px',
              pl: 20
            }}>
            <HeaderContents />
          </Box>
        </Container>
      </AppBar>
    )
}

// '@media screen and (display-mode: standalone)': {
//           paddingTop: '40px'
//         }
