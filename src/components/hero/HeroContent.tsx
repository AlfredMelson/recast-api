import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData, SourceSelection } from '../../cms'
import {
  condensedHeroAtom,
  currentApiStateAtom,
  dataCategoryAtom,
  dataQuantityAtom,
  dataSourceAtom
} from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { HeroButtonSx, HeroClosedViewButton, SplitButtonSx } from '../mui'
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

const CondensedHeroStyle = styled((props: CardProps) => <Card elevation={0} {...props} />, {
  name: 'HeroCard',
  slot: 'style'
})(({ theme }) => ({
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0)
  }
}))

const CondensedHeroContainerStyle = styled(CardContent, { name: 'HeroContainer', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(10, 0, 0, 20),
    [theme.breakpoints.down('sm')]: {
      borderRadius: theme.spacing(0),
      padding: theme.spacing(10)
    }
  })
)

type CondensedHeroSxAlias = {
  children: ReactNode
}

function CondensedHeroSx({ children }: CondensedHeroSxAlias) {
  return (
    <CondensedHeroStyle>
      <CondensedHeroContainerStyle>{children}</CondensedHeroContainerStyle>
    </CondensedHeroStyle>
  )
}

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 0, 20),
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

export function HeroClosedView() {
  const setCondensedHero = useSetRecoilState(condensedHeroAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const sourceName = SourceSelection.find(item => item.value === dataSource)?.source

  const dataCategory = useRecoilValue(dataCategoryAtom)
  const categoryByProvider = dataSource === '3' ? JsonPlaceholderData : RandomData

  const categoryName = categoryByProvider.find(item => item.appendix === dataCategory)?.category

  return (
    <Stack direction='row' spacing={20}>
      <HeroClosedViewButton
        sx={{ ml: 10 }}
        onClick={() => {
          setCondensedHero(false)
        }}>
        Api: {sourceName}
      </HeroClosedViewButton>
      <HeroClosedViewButton sx={{ ml: 10 }}>Category: {categoryName}</HeroClosedViewButton>
      <SplitButtonSx />
    </Stack>
  )
}

export default function HeroContent() {
  const dataSource = useRecoilValue(dataSourceAtom)
  const dataCategory = useRecoilValue(dataCategoryAtom)
  const dataQuantity = useRecoilValue(dataQuantityAtom)
  const currentApiState = useRecoilValue(currentApiStateAtom)
  const [condensedHero, setCondensedHero] = useRecoilState(condensedHeroAtom)

  return (
    <>
      <AnimatePresence initial={false}>
        {currentApiState && condensedHero && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.6 }}>
              <CondensedHeroSx>
                <HeroClosedView />
              </CondensedHeroSx>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!condensedHero && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <motion.div
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.6 }}>
              <HeroSx>
                <Stack
                  direction='row'
                  spacing={{ xs: 20, sm: 0 }}
                  justifyContent='space-between'
                  alignItems='baseline'>
                  <HeroTypography>Select API</HeroTypography>
                  {currentApiState && (
                    <HeroButtonSx
                      aria-label='hide'
                      onClick={() => setCondensedHero(bool => !bool)}
                    />
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
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
