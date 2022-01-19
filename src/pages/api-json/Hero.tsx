import Stack from '@mui/material/Stack'
import {
  DataCategorySelector,
  DataFetch,
  DataQuantitySelector,
  DataSearchBar,
  DataSourceSelector
} from '../../components/api-json/selectors'
import { HeroSx, HeroTypography } from './Hero.styles'

export function Hero() {
  return (
    <HeroSx>
      <HeroTypography>Select API from dropdown</HeroTypography>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        spacing={20}
        justifyContent={{ sm: 'center', md: 'flex-start' }}
        alignItems={{ sm: 'flex-start', md: 'center' }}>
        <DataSourceSelector />
        <DataCategorySelector />
        <DataQuantitySelector />
      </Stack>
      <HeroTypography>or Enter API</HeroTypography>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        spacing={20}
        justifyContent={{ sm: 'center', md: 'flex-start' }}
        alignItems={{ sm: 'flex-start', md: 'center' }}>
        <DataSearchBar />
        <DataFetch />
      </Stack>
    </HeroSx>
  )
}
