import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData, SourceSelection } from '../../cms'
import {
  condensedHeroAtom,
  currentApiQuerySelector,
  dataCategoryAtom,
  dataSourceAtom,
  httpClientAtom
} from '../../recoil-state'
import { HeroClosedViewButton } from '../mui'

const ClosedViewContainer = styled(Box, { name: 'ClosedView', slot: 'container' })(({ theme }) => ({
  paddingLeft: theme.spacing(20),
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0),
    padding: theme.spacing(10)
  }
}))

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

  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const apiStatus = currentApiQuery?.status

  const ClosedViewButtons: ClosedViewButtonsAlias[] = [
    { selector: 'Api:', value: sourceName },
    { selector: 'Category:', value: categoryName },
    { selector: 'Client:', value: httpClient },
    { selector: 'Status:', value: apiStatus }
  ]

  return (
    <ClosedViewContainer>
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
    </ClosedViewContainer>
  )
}
