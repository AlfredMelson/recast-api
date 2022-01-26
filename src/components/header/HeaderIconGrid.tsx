import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { GithubToggle, MoreInfoToggle, TerminalToggle, ThemeModeToggle } from '../toggle'

const HeaderIconGridItem = styled(Box, { name: 'HeaderIconGrid', slot: 'item' })(() => ({
  placeSelf: 'center'
}))

export default function HeaderIconGrid() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit='removed'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
          <HeaderIconGridItem>
            <TerminalToggle />
          </HeaderIconGridItem>
          <HeaderIconGridItem>
            <ThemeModeToggle />
          </HeaderIconGridItem>
          <HeaderIconGridItem>
            <GithubToggle />
          </HeaderIconGridItem>
          <HeaderIconGridItem>
            <MoreInfoToggle />
          </HeaderIconGridItem>
        </Box>
      </motion.div>
    </>
  )
}
