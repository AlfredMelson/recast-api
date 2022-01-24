import Box from '@mui/material/Box'
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
    return
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
              <SlideUpAnimation startY={30} endY={0}>
                <SunIcon
                  sx={{
                    position: 'absolute',
                    marginTop: '-13px',
                    marginLeft: '-10px'
                  }}
                />
              </SlideUpAnimation>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {themeColor === 'light' && (
              <SlideUpAnimation startY={-30} endY={0}>
                <MoonIcon
                  sx={{
                    position: 'absolute',
                    marginTop: '-13px',
                    marginLeft: '-10px'
                  }}
                />
              </SlideUpAnimation>
            )}
          </AnimatePresence>
        </IconButtonSxStyle>
      </ToolTipSx>
    </Box>
  )
}
