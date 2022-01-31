import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import GithubToggle from '../toggle/Github'
import MoreInfoToggle from '../toggle/MoreInfo'
import ThemeModeToggle from '../toggle/ThemeMode'

const MobileHeaderIconGridItem = styled(Box, { name: 'MobileHeaderIconGrid', slot: 'item' })(
  () => ({
    placeSelf: 'center'
  })
)

export default function MobileHeaderIconGrid() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
      <MobileHeaderIconGridItem>
        <ThemeModeToggle />
      </MobileHeaderIconGridItem>
      <MobileHeaderIconGridItem>
        <GithubToggle />
      </MobileHeaderIconGridItem>
      <MobileHeaderIconGridItem>
        <MoreInfoToggle />
      </MobileHeaderIconGridItem>
    </Box>
  )
}
