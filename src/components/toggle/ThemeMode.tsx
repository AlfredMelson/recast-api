import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { themeColorAtom } from '../../recoil'
import { MoonIcon, SunIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function ThemeModeToggle() {
  // retrieve previously set theme value from localStorage
  const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)
  // retrieve set user preference value from useMediaQuery
  const [preference] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'))

  React.useEffect(() => {
    const localStorageThemeColor = localStorage.getItem('themeColor')

    if (localStorageThemeColor) {
      setThemeColor(localStorageThemeColor)
    } else if (preference) {
      const preferredMode = preference ? 'dark' : 'light'
      console.log('ThemeModeToggle preferredMode', preferredMode)
      setThemeColor(preferredMode)
    } else {
      setThemeColor('light')
    }
  }, [setThemeColor, preference])

  const handleChange = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  }

  return (
    <ToolTipSx tooltipTitle={themeColor === 'dark' ? 'Light mode' : 'Dark mode'}>
      <IconButtonSxStyle onClick={handleChange}>
        {themeColor === 'dark' ? <SunIcon /> : <MoonIcon />}
      </IconButtonSxStyle>
    </ToolTipSx>
  )
}
