import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { ReactNode } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  condensedHeroAtom,
  currentApiStateAtom,
  dataCategoryAtom,
  dataQuantityAtom,
  dataSourceAtom
} from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { HeroButtonSx } from '../mui'
import {
  CategorySelector,
  DataControls,
  HttpClientSelector,
  QuantitySelector,
  SearchBar,
  SourceSelector
} from '../selectors'

const HeroStyle = styled((props: CardProps) => <Card {...props} />, {
  name: 'HeroCard',
  slot: 'style'
})(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],

  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0)
  }
}))

const HeroContainerStyle = styled(CardContent, { name: 'HeroContainer', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 0, 20, 20),
    [theme.breakpoints.down('sm')]: {
      borderRadius: theme.spacing(0),
      padding: theme.spacing(10)
    }
  })
)

type HeroSxAlias = {
  children: ReactNode
}

function HeroSx({ children }: HeroSxAlias) {
  return (
    <HeroStyle>
      <HeroContainerStyle>{children}</HeroContainerStyle>
    </HeroStyle>
  )
}

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[300] : BrandSwatch.Light.Grey[700],
  margin: theme.spacing(20, 0, 0, 30),
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

export default function HeroOpenView() {
  const dataSource = useRecoilValue(dataSourceAtom)
  const dataCategory = useRecoilValue(dataCategoryAtom)
  const dataQuantity = useRecoilValue(dataQuantityAtom)
  const currentApiState = useRecoilValue(currentApiStateAtom)
  const setCondensedHero = useSetRecoilState(condensedHeroAtom)

  return (
    <HeroSx>
      <Stack
        direction='row'
        spacing={{ xs: 20, sm: 0 }}
        justifyContent='space-between'
        alignItems='baseline'>
        <HeroTypography>Select API</HeroTypography>
        {currentApiState && (
          <HeroButtonSx aria-label='hide' onClick={() => setCondensedHero(bool => !bool)} />
        )}
      </Stack>
      <HeroStack>
        <SourceSelector />
        <CategorySelector />
        <QuantitySelector />
      </HeroStack>
      <HeroTypography>or Enter API</HeroTypography>
      <HeroStack>
        <SearchBar />
      </HeroStack>
      {((dataSource === '2' && dataCategory !== '') || dataQuantity !== '') && (
        <>
          <HeroTypography>Select Http Client</HeroTypography>
          <HeroStack>
            <HttpClientSelector />
            <DataControls />
          </HeroStack>
        </>
      )}
    </HeroSx>
  )
}
