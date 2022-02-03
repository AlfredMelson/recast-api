import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer'
import { NavBarHeader } from '../components/header'

const LayoutWrapper = styled(Box, { name: 'Layout', slot: 'wrapper' })(() => ({
  bgcolor: ({ palette }) => palette.background.default,
  height: '100%'
}))

export function Layout() {
  return (
    <LayoutWrapper>
      <NavBarHeader />
      <Container maxWidth='lg' disableGutters sx={{ paddingTop: { xs: 60, md: 72 } }}>
        <Outlet />
        <EditorDrawer />
      </Container>
    </LayoutWrapper>
  )
}
