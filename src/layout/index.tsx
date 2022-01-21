import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { Header } from './Header'
import { HeaderMobile } from './HeaderMobile'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh'
}))

const HeaderWrapper = styled('header', { name: 'Header', slot: 'wrapper' })(({ theme }) => ({
  position: 'static',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.drawer + 1
}))

export function Layout() {
  return (
    <LayoutWrapper>
      <Container maxWidth='lg'>
        <HeaderWrapper>
          <Header />
          <HeaderMobile />
        </HeaderWrapper>
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
