import Accordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { SyntheticEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { JsonPlaceholderData, NodeClient, RandomData, SourceSelection } from '../../cms'
import { dataCategoryAtom, dataSourceAtom, httpClientAtom } from '../../recoil-state'
import { AxiosIcon, UseSWRIcon } from '../icons'
import { AccordionButton } from '../mui'
import { AccordionContent } from './AccordionContent'

const AccordionStyle = styled(
  (props: AccordionProps) => <Accordion disableGutters elevation={0} square {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.background.default}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummaryStyle = styled(
  (props: AccordionSummaryProps) => <AccordionSummary {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
  flexDirection: 'row-reverse',
  // '& .MuiAccordionSummary-expandIconWrapper': {
  //   color: 'transparent'
  // },
  // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //   color: theme.palette.text.secondary,
  //   transform: 'rotate(90deg)'
  // },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(10)
  }
}))

const AccordionDetailsStyle = styled(
  (props: AccordionDetailsProps) => <AccordionDetails {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  padding: theme.spacing(2)
}))

// function AccordionOpenText() {
//   return (
//     <Typography variant='body2' sx={{ ml: 10 }}>
//       Select Data
//     </Typography>
//   )
// }

function AccordionClosedText() {
  const dataSource = useRecoilValue(dataSourceAtom)

  const sourceName = SourceSelection.find(item => item.value === dataSource)?.source

  const dataCategory = useRecoilValue(dataCategoryAtom)
  const categoryByProvider = dataSource === '3' ? JsonPlaceholderData : RandomData

  const categoryName = categoryByProvider.find(item => item.appendix === dataCategory)?.category

  const httpClient = useRecoilValue(httpClientAtom)

  const httpName = NodeClient.find(item => item.value === httpClient)?.client

  return (
    <Stack direction='row' spacing={20}>
      <AccordionButton sx={{ ml: 10 }}>Api: {sourceName}</AccordionButton>
      <AccordionButton sx={{ ml: 10 }}>Category: {categoryName}</AccordionButton>
      <AccordionButton
        sx={{ ml: 10 }}
        endIcon={httpName === 'Axios' ? <AxiosIcon /> : <UseSWRIcon />}
      />
    </Stack>
  )
}

export default function AccordionSx() {
  const [expanded, setExpanded] = useState<string | false>('selectPanel')

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <AccordionStyle expanded={expanded === 'selectPanel'} onChange={handleChange('selectPanel')}>
      <AccordionSummaryStyle aria-controls='selectPaneld-content' id='selectPaneld-header'>
        {!expanded && <AccordionClosedText />}
      </AccordionSummaryStyle>
      <AccordionDetailsStyle>
        <AccordionContent />
      </AccordionDetailsStyle>
    </AccordionStyle>
  )
}
