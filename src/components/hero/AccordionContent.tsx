import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import { dataCategoryAtom, dataQuantityAtom, dataSourceAtom } from '../../recoil-state'
import {
  CategorySelector,
  DataControls,
  HttpClientSelector,
  QuantitySelector,
  SearchBar,
  SourceSelector
} from '../api-json/selectors'
import AccordionContentSx from './AccordionContent.style'

const AccordionContentTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 20, 20),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(20, 10, 10)
  }
}))

export const AccordionContentStack = styled(
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

export function AccordionContent() {
  const dataSource = useRecoilValue(dataSourceAtom)
  const dataCategory = useRecoilValue(dataCategoryAtom)
  const dataQuantity = useRecoilValue(dataQuantityAtom)

  return (
    <AccordionContentSx>
      <AccordionContentTypography>Select API</AccordionContentTypography>
      <AccordionContentStack>
        <SourceSelector />
        <CategorySelector />
        <QuantitySelector />
      </AccordionContentStack>
      <AccordionContentTypography>or Enter API</AccordionContentTypography>
      <AccordionContentStack>
        <SearchBar />
      </AccordionContentStack>
      {((dataSource === 'randomDataApi' && dataCategory !== '') || dataQuantity !== '') && (
        <>
          <AccordionContentTypography>Select Http Client</AccordionContentTypography>
          <AccordionContentStack>
            <HttpClientSelector />
            <DataControls />
          </AccordionContentStack>
        </>
      )}
    </AccordionContentSx>
  )
}
