import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { PreHeroSx } from '../components/mui'
// import svgHero from '../style/bgGlow.svg'
import { AppHeader } from './AppHeader'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  // backgroundImage: `url(${svgHero})`,
  height: '100vh',
  overflow: 'hidden'
}))

export function Layout() {
  return (
    <LayoutWrapper>
      <Container maxWidth='lg'>
        <PreHeroSx />
        <AppHeader />
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
