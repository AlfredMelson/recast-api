import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { Header } from './Header'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  overflow: 'hidden'
}))

export function Layout() {
  return (
    <LayoutWrapper>
      <Container maxWidth='lg'>
        <Header />
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
