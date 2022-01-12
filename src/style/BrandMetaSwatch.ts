import { BrandSwatch } from './BrandSwatch'

export const BrandMetaSwatch = (mode: 'dark' | 'light') => {
  const themeColor = {
    dark: BrandSwatch.Dark.Grey[800],
    light: BrandSwatch.Light.Grey[50],
  }
  return themeColor[mode]
}
