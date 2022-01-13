import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { GithubToggle, TerminalToggle, ThemeModeToggle } from '../toggle'

const PreHeroSxStyle = styled(CardHeader, { name: 'PreHeroSx', slot: 'style' })(({ theme }) => ({
  padding: theme.spacing(16),
  '.MuiCardHeader-title': {
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }
}))

export function PreHeroSx() {
  return (
    <PreHeroSxStyle
      title='An interactive tool that displays editable api responses'
      action={
        <Stack direction='row' alignItems='center'>
          <Box sx={{ mr: 0 }}>
            <TerminalToggle />
          </Box>
          <Box sx={{ mr: 0 }}>
            <ThemeModeToggle />
          </Box>
          <Box sx={{ mr: 10 }}>
            <GithubToggle />
          </Box>
        </Stack>
      }
    />
  )
}
