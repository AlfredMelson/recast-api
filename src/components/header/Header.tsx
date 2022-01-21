import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil-state'
import { DrawerIcons } from '../drawer'
import { SlideUpAnimation } from '../framer-motion'
import { HeaderIcons, HeaderLogo, HeaderTitle } from '.'

export default function Header() {
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  const [hover, setHover] = React.useState(false)
  const [disable, setDisable] = React.useState(false)

  const hoverTransition = () => {
    setHover(!hover)
  }

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  const hoverOutTransition = () => {
    setHover(true)
    setDisable(true)
    // restore state to pre-hover
    interactionTimer.current = window.setTimeout(() => {
      setHover(false)
      setDisable(false)
    }, 3000)
  }

  return (
    <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
      {dataDrawerOpen ? (
        <Box
          sx={{
            minHeight: 60,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
          }}>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'start',
              pl: 20
            }}>
            <HeaderLogo />
          </Box>
          <Box
            sx={{
              gridColumn: 2,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'center',
              zIndex: theme => theme.zIndex.drawer + 2
            }}>
            <AnimatePresence exitBeforeEnter>
              <SlideUpAnimation startY={-30} endY={3}>
                <DrawerIcons />
              </SlideUpAnimation>
            </AnimatePresence>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: 60,
            display: 'grid',
            gridTemplateColumns: 'auto 200px'
          }}>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'start',
              pl: 20
            }}>
            <AnimatePresence>
              {!hover && (
                <SlideUpAnimation startY={-30} endY={3}>
                  <HeaderLogo />
                </SlideUpAnimation>
              )}
            </AnimatePresence>
          </Box>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'start',
              pl: 20
            }}>
            <AnimatePresence>
              {!dataDrawerOpen && hover && (
                <SlideUpAnimation startY={30} endY={3}>
                  <HeaderTitle />
                </SlideUpAnimation>
              )}
            </AnimatePresence>
          </Box>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              alignSelf: 'center',
              justifySelf: 'start'
            }}>
            {!dataDrawerOpen && (
              <Button
                disabled={disable}
                disableFocusRipple
                disableRipple
                onMouseOver={hoverTransition}
                onFocus={hoverTransition}
                onMouseOut={hoverOutTransition}
                onBlur={hoverTransition}
                sx={{
                  height: 60,
                  width: 110,
                  '&:hover, .Mui-focused': {
                    backgroundColor: 'transparent'
                  }
                }}
              />
            )}
          </Box>
          <Box sx={{ gridColumn: 2, gridRow: 1, placeSelf: 'center' }}>
            <AnimatePresence>
              {!dataDrawerOpen && (
                <SlideUpAnimation startY={-90} endY={0}>
                  <HeaderIcons />
                </SlideUpAnimation>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      )}
    </Box>
  )
}
