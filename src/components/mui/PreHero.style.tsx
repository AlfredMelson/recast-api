import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { DrawerIcons } from '../drawer'
import { GithubToggle, TerminalToggle, ThemeModeToggle } from '../toggle'

export const HeaderStyle = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  padding: theme.spacing(16),
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.drawer + 1
}))

const PreHeroSxStyle = styled(Typography, { name: 'PreHeroSx', slot: 'style' })(({ theme }) => ({
  color: theme.palette.text.secondary
}))

const ButtonSxPreHero = styled(
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
  const [hover, setHover] = React.useState(false)

  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  const hoverTransition = () => {
    setHover(!hover)
  }

  return (
    <HeaderStyle>
      <Stack direction='row' alignItems='center'>
        <AnimatePresence exitBeforeEnter>
          {dataDrawerOpen ? (
            <>
              <PreHeroSxStyle variant='body1' sx={{ flex: 1, cursor: 'pointer' }}>
                Recast
              </PreHeroSxStyle>
              <Box sx={{ flex: 1 }}>
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
              </Box>
            </>
          ) : (
            <>
              <ButtonSxPreHero
                onMouseOver={hoverTransition}
                onFocus={hoverTransition}
                onMouseOut={hoverTransition}
                onBlur={hoverTransition}
                sx={{ width: 20, height: 44, cursor: 'pointer' }}
              />
              <PreHeroSxStyle variant='body2' sx={{ flex: 1, ml: -64 }}>
                {hover ? (
                  `Lightweight, interactive api tool that visualizes response, interfers type and
                  allows for crud operations.`
                ) : (
                  <PreHeroSxStyle variant='body1'>Recast</PreHeroSxStyle>
                )}
              </PreHeroSxStyle>
            </>
          )}
        </AnimatePresence>
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
    </HeaderStyle>
  )
}
