import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../recoil'
import { BrandSwatch } from '../style'
// import { MobileNavBarLinks } from '../components/header'

const HeaderWrapper = styled(Box, { name: 'Header', slot: 'wrapper' })(({ theme }) => ({
  top: 50,
  position: 'sticky',
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  borderRadius: theme.spacing(3, 3, 0, 0)
}))

export function AppHeader() {
  // visability of drawer containing terminal
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  return <>{dataDrawerOpen && <HeaderWrapper></HeaderWrapper>}</>
}

// Mobile
// <Box sx={{ display: { md: 'none' } }}>
//   <Container
//     disableGutters
//     sx={{
//       minHeight: 52,
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)'
//     }}>
//     <Box sx={{ gridColumn: 3, alignSelf: 'center', justifySelf: 'end', pr: 30 }}>
//       <MobileNavBarLinks />
//     </Box>
//   </Container>
// </Box>
