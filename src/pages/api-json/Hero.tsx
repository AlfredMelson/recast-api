import Stack, { StackProps } from '@mui/material/Stack'
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
  margin: theme.spacing(20, 0, 0, 20),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(10, 10, 10, 30)
  }
}))

const HeroStack = styled(
  (props: StackProps) => <Stack direction={{ xs: 'column', sm: 'row' }} {...props} />,
  { name: 'Hero', slot: 'stack' }
)(({ theme }) => ({
  justifyContent: 'start',
  alignItems: 'center',
  margin: theme.spacing(10, 0, 10, 10),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0),
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export function Hero() {
  const dataSource = useRecoilValue(dataSourceAtom)
  console.log('dataSource', dataSource)

  return (
    <HeroSx>
      <HeroTypography>Select API</HeroTypography>
      <HeroStack>
        <DataSourceSelector />
        <DataCategorySelector />
        <DataQuantitySelector />
        <HttpClientSelector />
      </HeroStack>
      <HeroTypography>or Enter API</HeroTypography>
      <HeroStack>
        <DataSearchBar />
        <DataFetch />
      </HeroStack>
    </HeroSx>
  )
}
