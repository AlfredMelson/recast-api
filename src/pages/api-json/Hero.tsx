import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import { HeroSx } from '../../components/api-json'
import {
  DataCategorySelector,
  DataFetch,
  DataQuantitySelector,
  DataSearchBar,
  DataSourceSelector
} from '../../components/api-json/selectors'
import HttpClientSelector from '../../components/api-json/selectors/HttpClient'
import { dataSourceAtom } from '../../recoil-state'

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 10, 10)
}))

export function Hero() {
  const dataSource = useRecoilValue(dataSourceAtom)

  return (
    <HeroSx>
      <HeroTypography>Select API from dropdown</HeroTypography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={20}
        justifyContent={{
          xs: 'center',
          md: dataSource === 'jsonPlaceholderApi' ? 'space-between' : 'start'
        }}
        alignItems={{ xs: 'flex-start', md: 'center' }}>
        <DataSourceSelector />
        <DataCategorySelector />
        <DataQuantitySelector />
        <HttpClientSelector />
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
