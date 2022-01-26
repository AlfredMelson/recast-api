import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { NavBarHeader } from '../components/header'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'wrapper' })(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%'
}))

export function Layout() {
  return (
    <LayoutWrapper>
      <Container maxWidth='lg' disableGutters>
        <NavBarHeader />
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
