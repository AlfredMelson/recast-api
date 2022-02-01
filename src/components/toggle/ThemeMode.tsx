import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { themeColorAtom } from '../../recoil-state'
import { MoonIcon, SunIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'
// import useMediaQuery from '@mui/material/useMediaQuery'

export default function ThemeModeToggle() {
  // retrieve previously set theme value from localStorage
  const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)

  useEffect(() => {
    const localStorageThemeColor = localStorage.getItem('themeColor')

    if (localStorageThemeColor) {
      setThemeColor(localStorageThemeColor)
    }
    return
  }, [setThemeColor])

  const handleChange = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  }

  // const changeTheme = useChangeTheme()

  // const [mode, setMode] = useState<string | null>(null)

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // useEffect(() => {
  //   const initialMode = getCookie('paletteMode') || 'system'
  //   setMode(initialMode)
  // }, [])

  // const handleChangeThemeMode = (checked: boolean) => {
  //   const paletteMode = checked ? 'dark' : 'light'
  //   setMode(paletteMode)

  //   document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`
  //   changeTheme({ paletteMode })
  // }

  return (
    <>
      <AnimatePresence initial={false}>
        {themeColor === 'light' && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto', y: 0 },
              collapsed: { opacity: 0, height: 0, y: -20 }
            }}
            transition={{ duration: 0.4 }}>
            <ToolTipSx tooltipTitle='Dark mode'>
              <IconButtonSxStyle onClick={handleChange} id='theme-toggle'>
                <MoonIcon />
              </IconButtonSxStyle>
            </ToolTipSx>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {themeColor === 'dark' && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto', y: 0 },
              collapsed: { opacity: 0, height: 0, y: 10 }
            }}
            transition={{ duration: 0.4 }}>
            <ToolTipSx tooltipTitle='Light mode'>
              <IconButtonSxStyle onClick={handleChange} id='theme-toggle'>
                <SunIcon />
              </IconButtonSxStyle>
            </ToolTipSx>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
