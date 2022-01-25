import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import {
  CategorySelector,
  DataControls,
  HttpClientSelector,
  QuantitySelector,
  SearchBar,
  SourceSelector
} from '../api-json/selectors'
import HeroSx from './Hero.styles'

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 20),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(20, 10, 10)
  }
}))

const HeroStack = styled(
  (props: StackProps) => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 20, sm: 0 }} {...props} />
  ),
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
  return (
    <HeroSx>
      <HeroTypography>Select API</HeroTypography>
      <HeroStack>
        <SourceSelector />
        <CategorySelector />
        <QuantitySelector />
        <HttpClientSelector />
      </HeroStack>
      <HeroTypography>or Enter API</HeroTypography>
      <HeroStack>
        <SearchBar />
        <DataControls />
      </HeroStack>
    </HeroSx>
  )
}
