import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useRecoilState } from 'recoil'
import * as React from 'react'
import { themeColorAtom } from '../../recoil'
import { IconButtonSxColorMode } from '../mui/IconButton.style'
import { ToolTipSx } from '../mui'
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
        {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
