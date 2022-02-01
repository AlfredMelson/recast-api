import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import { HeaderContents, MobileHeaderContents } from '.'

export default function NavBarHeader() {
  return (
    <AppBar
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'transparent',
        '@media screen and (display-mode: standalone)': {
          paddingTop: '40px'
        }
      }}
      className='standalone-header'>
      <Container maxWidth='lg' disableGutters>
        <HeaderContents />
        <MobileHeaderContents />
      </Container>
    </AppBar>
  )
}
