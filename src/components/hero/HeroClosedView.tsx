import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData, SourceSelection } from '../../cms'
import {
  condensedHeroAtom,
  dataCategoryAtom,
  dataSourceAtom,
  httpClientAtom
} from '../../recoil-state'
import { HeroClosedViewButton } from '../mui'

const ClosedViewStyle = styled((props: CardProps) => <Card elevation={0} {...props} />, {
  name: 'ClosedView',
  slot: 'style'
})(({ theme }) => ({
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0)
  }
}))

const ContentContainer = styled(CardContent, { name: 'ContentContainer', slot: 'style' })(
  ({ theme }) => ({
    padding: theme.spacing(10, 0, 0, 20),
    [theme.breakpoints.down('sm')]: {
      borderRadius: theme.spacing(0),
      padding: theme.spacing(10)
    }
  })
)

type ClosedViewSxAlias = {
  children: ReactNode
}

function ClosedViewSx({ children }: ClosedViewSxAlias) {
  return (
    <ClosedViewStyle>
      <ContentContainer>{children}</ContentContainer>
    </ClosedViewStyle>
  )
}

type ClosedViewButtonsAlias = {
  selector: string
  value: string
}

export default function HeroClosedView() {
  const setCondensedHero = useSetRecoilState(condensedHeroAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const sourceName = SourceSelection.find(item => item.value === dataSource)?.source

  const dataCategory = useRecoilValue(dataCategoryAtom)
  const categoryByProvider = dataSource === '3' ? JsonPlaceholderData : RandomData

  const categoryName = categoryByProvider.find(item => item.appendix === dataCategory)?.category

  const httpClient = useRecoilValue(httpClientAtom)

  const ClosedViewButtons: ClosedViewButtonsAlias[] = [
    { selector: 'Api:', value: sourceName },
    { selector: 'Category:', value: categoryName },
    { selector: 'Client:', value: httpClient }
  ]

  return (
    <ClosedViewSx>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        {ClosedViewButtons.map(button => (
          <HeroClosedViewButton
            key={button.value}
            sx={{ mr: 20 }}
            onClick={() => {
              setCondensedHero(false)
            }}>
            {button.selector} {button.value}
          </HeroClosedViewButton>
        ))}
      </Stack>
    </ClosedViewSx>
  )
}
