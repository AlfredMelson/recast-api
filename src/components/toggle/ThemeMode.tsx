import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { themeColorAtom } from '../../recoil-state'
import { SlideUpAnimation } from '../framer-motion'
import { MoonIcon, SunIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function ThemeModeToggle() {
  // retrieve previously set theme value from localStorage
  const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)

  React.useEffect(() => {
    const localStorageThemeColor = localStorage.getItem('themeColor')

    if (localStorageThemeColor) {
      setThemeColor(localStorageThemeColor)
    }
  }, [setThemeColor])

  const handleChange = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <ToolTipSx tooltipTitle={themeColor === 'dark' ? 'Light mode' : 'Dark mode'}>
        <IconButtonSxStyle onClick={handleChange} id='theme-toggle'>
          <AnimatePresence>
            {themeColor === 'dark' && (
              <SlideUpAnimation startY={30} endY={3}>
                <SunIcon
                  sx={{
                    position: 'absolute',
                    marginTop: '-16px',
                    marginLeft: '-10px'
                  }}
                />
              </SlideUpAnimation>
            )}
          </AnimatePresence>
          <Box sx={{ zIndex: 5000 }}>
            <AnimatePresence>
              {themeColor === 'light' && (
                <SlideUpAnimation startY={-30} endY={3}>
                  <MoonIcon
                    sx={{
                      position: 'absolute',
                      marginTop: '-16px',
                      marginLeft: '-10px'
                    }}
                  />
                </SlideUpAnimation>
              )}
            </AnimatePresence>
          </Box>
        </IconButtonSxStyle>
      </ToolTipSx>
    </Box>
  )
}
