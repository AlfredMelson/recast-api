import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { GithubToggle, TerminalToggle, ThemeModeToggle } from '../toggle'

const HeaderIconGrid = styled(Box, { name: 'HeaderIcon', slot: 'grid' })(() => ({
  placeSelf: 'center'
}))

export default function HeaderIcons() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <HeaderIconGrid>
        <TerminalToggle />
      </HeaderIconGrid>
      <HeaderIconGrid>
        <ThemeModeToggle />
      </HeaderIconGrid>
      <HeaderIconGrid>
        <GithubToggle />
      </HeaderIconGrid>
    </Box>
  )
}
