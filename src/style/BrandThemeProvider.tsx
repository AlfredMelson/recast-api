import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRecoilValue } from 'recoil'
import { deepmerge } from '@mui/utils'
import { themeColorAtom } from '../recoil'
import { BrandDesignTokens } from './BrandTheme'
import { BrandThemedComponents } from './BrandThemedComponents'

type BrandThemeProviderAlias = {
  children: React.ReactNode
}

export function BrandThemeProvider({ children }: BrandThemeProviderAlias) {
  // color mode value managed globally via recoil
  const themeColor = useRecoilValue(themeColorAtom)
  // color mode value passed as string
  const mode = themeColor === 'light' ? 'light' : 'dark'
  // user defiend color palette (theme) object constructed based on color mode
  const designTokens = BrandDesignTokens(mode)
  // create a predefined theme object; components set as {}
  const appTheme = createTheme(designTokens)
  // merge predefined mui components into appTheme
  const theme = createTheme(deepmerge(appTheme, BrandThemedComponents(appTheme)))

  // note: ThemeProvider provides theme prop down the React tree via context
  // note: CssBaseline is a css reset component similar to normalize.css

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
