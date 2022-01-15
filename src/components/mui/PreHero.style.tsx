import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { DrawerIcons } from '../drawer'
import { FadeAnimation } from '../framer-motion'
import { TextAnimation } from '../framer-motion/Text.animation'
import { GithubToggle, TerminalToggle, ThemeModeToggle } from '../toggle'

export const HeaderStyle = styled('header', { name: 'PreHero', slot: 'header' })(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: 70,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.drawer + 1
}))

export const PreHeroSxStyle = styled(Typography, { name: 'PreHeroSx', slot: 'style' })(
  ({ theme }) => ({
    color: theme.palette.text.secondary
  })
)

export const ButtonSxPreHero = styled(
  (props: ButtonProps) => <Button disableRipple disableFocusRipple variant='text' {...props} />,
  { name: 'PreHero', slot: 'button' }
)(() => ({
  width: 20,
  height: 44,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  '&:hover, .Mui-focused': {
    backgroundColor: 'transparent'
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent'
  }
}))

export function PreHeroSx() {
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  const [hover, setHover] = React.useState(false)

  const hoverTransition = () => {
    setHover(!hover)
  }

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  const hoverOutTransition = () => {
    // restore state to pre-hover
    interactionTimer.current = window.setTimeout(() => {
      setHover(!hover)
    }, 3000)
    return
  }

  return (
    <HeaderStyle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 150px',
          minHeight: 70,
          mx: 20
        }}>
        <Box sx={{ gridColumn: 2, gridRow: 1, alignSelf: 'center', justifySelf: 'start' }}>
          {dataDrawerOpen && (
            <motion.div
              key={1}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                delay: 0.5,
                duration: 0.5
              }}>
              <DrawerIcons />
            </motion.div>
          )}
        </Box>

        <Box
          sx={{
            gridColumn: '1 / span 2',
            gridRow: 1,
            alignSelf: 'center',
            justifySelf: 'start'
          }}>
          {!dataDrawerOpen && hover && (
            <TextAnimation text='Lightweight, interactive tool that visualizes api response, infers type and accepts crud operations.' />
          )}
        </Box>
        <Box sx={{ gridColumn: 1, gridRow: 1, alignSelf: 'center', justifySelf: 'start' }}>
          {!hover && (
            <FadeAnimation delay={0.2} duration={0.4}>
              <Typography variant='body1'>Recast</Typography>
            </FadeAnimation>
          )}
        </Box>
        <Box sx={{ gridColumn: 1, gridRow: 1, alignSelf: 'center', justifySelf: 'start' }}>
          {!dataDrawerOpen && (
            <Button
              disableFocusRipple
              disableRipple
              onMouseOver={hoverTransition}
              onFocus={hoverTransition}
              onMouseOut={hoverOutTransition}
              onBlur={hoverTransition}
              sx={{
                height: 60,
                width: 80,
                '&:hover, .Mui-focused': {
                  backgroundColor: 'transparent'
                }
              }}
            />
          )}
        </Box>
        <Box sx={{ gridColumn: 3, gridRow: 1, placeSelf: 'center end' }}>
          <FadeAnimation delay={0.5} duration={0.4}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)'
              }}>
              <Box sx={{ gridColumn: 1, placeSelf: 'center' }}>
                <TerminalToggle />
              </Box>
              <Box sx={{ gridColumn: 2, placeSelf: 'center' }}>
                <ThemeModeToggle />
              </Box>
              <Box sx={{ gridColumn: 3, placeSelf: 'center' }}>
                <GithubToggle />
              </Box>
            </Box>
          </FadeAnimation>
        </Box>
      </Box>
    </HeaderStyle>
  )
}
