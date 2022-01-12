import { useRecoilValue } from 'recoil'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { MobileNavBarLinks } from '../components/header'
import { dataDrawerOpenAtom } from '../recoil'
import { DrawerIcons } from '../components/drawer'
import { BrandSwatch } from '../style'

const HeaderWrapper = styled(Box, { name: 'Header', slot: 'wrapper' })(({ theme }) => ({
  top: 50,
  position: 'sticky',
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
  borderRadius: theme.spacing(3, 3, 0, 0),
  zIndex: theme.zIndex.drawer + 1,
}))

export function AppHeader() {
  // visability of drawer containing terminal
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  return (
    <HeaderWrapper
      sx={{
        zIndex: !dataDrawerOpen && -1,
      }}>
      <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
        <Container maxWidth='lg'>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{
              height: 50,
            }}>
            {dataDrawerOpen && <DrawerIcons />}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ display: { md: 'none' } }}>
        <Container
          disableGutters
          sx={{
            minHeight: 52,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
          <Box sx={{ gridColumn: 3, alignSelf: 'center', justifySelf: 'end', pr: 30 }}>
            <MobileNavBarLinks />
          </Box>
        </Container>
      </Box>
    </HeaderWrapper>
  )
}
