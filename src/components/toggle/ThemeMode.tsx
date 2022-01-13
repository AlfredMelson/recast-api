import * as React from 'react'
import { useRecoilState } from 'recoil'
import { themeColorAtom } from '../../recoil'
import { MoonIcon, SunIcon } from '../icons'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'
// import useMediaQuery from '@mui/material/useMediaQuery'

export function ThemeModeToggle() {
  //retrieve localStorage theme value
  const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)
  // const [userPreference, setUserPreference] = useRecoilState(userPreferenceAtom)
  // setUserPreference(useMediaQuery('(prefers-color-scheme: dark)'))

  React.useEffect(() => {
    const localStorageThemeColor = localStorage.getItem('themeColor')

    if (localStorageThemeColor) {
      setThemeColor(localStorageThemeColor)
    }
    // const preferredMode = userPreference ? 'dark' : 'light'
    // const preferredMode = 'dark'
    // setThemeColor(preferredMode)
  }, [setThemeColor])

  const handleChange = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  }

  return (
    <ToolTipSx tooltipTitle={themeColor === 'dark' ? 'Light mode' : 'Dark mode'}>
      <IconButtonSxColorMode onClick={handleChange}>
        {themeColor === 'dark' ? <SunIcon /> : <MoonIcon />}
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
