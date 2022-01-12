import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { EditorDrawer } from '../components/drawer'
import { AppHeader } from './AppHeader'
// import { useLocation } from 'react-router-dom'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'Wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  overflow: 'hidden',
}))

export function Layout() {
  // useLocation to identify HomePage and enable scroll
  // const location = useLocation()
  // console.log('location from Layout.tsx', location)

  return (
    <LayoutWrapper>
      <Container maxWidth='lg'>
        <AppHeader />
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
