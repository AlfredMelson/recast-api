import BrandSwatch from './BrandSwatch'

const BrandMetaSwatch = (mode: 'dark' | 'light') => {
  const themeColor = {
    dark: BrandSwatch.Dark.Grey[900],
    light: BrandSwatch.Light.Grey[50]
  }
  return themeColor[mode]
}

export default BrandMetaSwatch
