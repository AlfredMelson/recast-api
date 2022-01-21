import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { HeroSx } from '../../components/api-json'
import {
  DataCategorySelector,
  DataFetch,
  DataQuantitySelector,
  DataSearchBar,
  DataSourceSelector
} from '../../components/api-json/selectors'

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 10, 10)
}))

export function Hero() {
  return (
    <HeroSx>
      <HeroTypography>Select API from dropdown</HeroTypography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={20}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}>
        <DataSourceSelector />
        <DataCategorySelector />
        <DataQuantitySelector />
      </Stack>
      <HeroTypography>or Enter API</HeroTypography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={20}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}>
        <DataSearchBar />
        <DataFetch />
      </Stack>
    </HeroSx>
  )
}
