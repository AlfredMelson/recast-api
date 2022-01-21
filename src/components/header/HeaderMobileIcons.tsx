import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { GithubToggle, ThemeModeToggle } from '../toggle'

const HeaderIconGrid = styled(Box, { name: 'HeaderIcon', slot: 'grid' })(() => ({
  placeSelf: 'center'
}))

export default function HeaderMobileIcons() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <HeaderIconGrid>
        <ThemeModeToggle />
      </HeaderIconGrid>
      <HeaderIconGrid>
        <GithubToggle />
      </HeaderIconGrid>
    </Box>
  )
}
