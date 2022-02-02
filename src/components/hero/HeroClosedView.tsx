import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData, SourceSelection } from '../../cms'
import {
  condensedHeroAtom,
  currentApiQuerySelector,
  dataCategoryAtom,
  dataSourceAtom
} from '../../recoil-state'
import HeroChip from './HeroChip'

const ClosedViewContainer = styled(Box, { name: 'ClosedView', slot: 'container' })(({ theme }) => ({
  paddingLeft: theme.spacing(20),
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(0),
    padding: theme.spacing(10)
  }
}))

export interface ClosedViewButton {
  iconref?: 'category' | 'source'
  variant: 'filled' | 'outlined'
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

  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const apiStatus = currentApiQuery?.status

  const ClosedViewButtons: ClosedViewButton[] = [
    {
      iconref: 'source',
      variant: 'filled',
      selector: 'Api',
      value: sourceName
    },
    {
      iconref: 'category',
      variant: 'filled',
      selector: 'Category',
      value: categoryName
    },
    {
      variant: 'filled',
      selector: '',
      value: `status: ${apiStatus}`
    }
  ]

  return (
    <ClosedViewContainer>
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        {ClosedViewButtons.map(button => (
          <HeroChip
            key={button.selector}
            iconref={button.iconref}
            variant={button.variant}
            label={button.value}
            onClick={() => {
              setCondensedHero(false)
            }}
          />
        ))}
      </Stack>
    </ClosedViewContainer>
  )
}
