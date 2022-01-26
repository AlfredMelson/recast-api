import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { dataDrawerOpenAtom, minifyDialogOpenAtom } from '../../recoil-state'
import { MinifyIcons } from '../drawer'
import { SlideUpAnimation } from '../framer-motion'
import { DrawerIconGrid, HeaderIconGrid, HeaderLogoSx, HeaderTitle } from '.'

export default function HeaderContents() {
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

  const [hover, setHover] = useState(false)
  const [disable, setDisable] = useState(false)

  const hoverTransition = () => {
    setHover(!hover)
  }

  // useRef to avoid re-renders during button handler
  const interactionTimer = useRef<number>()

  const hoverOutTransition = () => {
    setHover(true)
    setDisable(true)
    // restore state to pre-hover
    interactionTimer.current = window.setTimeout(() => {
      setHover(false)
      setDisable(false)
    }, 3000)
  }
  const minifyDialogOpen = useRecoilValue(minifyDialogOpenAtom)

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'grid' },
        gridTemplateColumns: 'auto 176px',
        pl: 20
      }}>
      <Box
        sx={{
          gridColumn: 1,
          gridRow: 1
        }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}>
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              placeSelf: 'center start'
            }}>
            <HeaderLogoSx animate={hover} />
          </Box>
          <Box
            sx={{
              gridColumn: '1 / 3',
              gridRow: 1,
              placeSelf: 'center start'
            }}>
            <AnimatePresence>
              {!dataDrawerOpen && hover && (
                <SlideUpAnimation startY={30} endY={0}>
                  <HeaderTitle />
                </SlideUpAnimation>
              )}
            </AnimatePresence>
          </Box>

          <Box
            sx={{
              gridColumn: 2,
              gridRow: 1,
              placeSelf: 'center start'
            }}>
            <DrawerIconGrid />
          </Box>

          <AnimatePresence>
            {minifyDialogOpen && (
              <Box
                sx={{
                  gridColumn: 2,
                  gridRow: 1,
                  placeSelf: 'center start'
                }}>
                <SlideUpAnimation startY={-30} endY={0}>
                  <MinifyIcons />
                </SlideUpAnimation>
              </Box>
            )}
          </AnimatePresence>
          {!dataDrawerOpen && (
            <Box
              sx={{
                gridColumn: 1,
                gridRow: 1,
                placeSelf: 'center start'
              }}>
              <Button
                disabled={disable}
                disableFocusRipple
                disableRipple
                onMouseOver={hoverTransition}
                onFocus={hoverTransition}
                onMouseOut={hoverOutTransition}
                onBlur={hoverTransition}
                sx={{
                  height: 40,
                  width: 110,
                  '&:hover, .Mui-focused': {
                    backgroundColor: 'transparent'
                  }
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ gridColumn: 2, gridRow: 1 }}>
        <HeaderIconGrid />
      </Box>
    </Box>
  )
}
