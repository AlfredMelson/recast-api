import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { AppHeader } from './AppHeader'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'Wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  overflow: 'hidden'
}))

export function Layout() {
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
