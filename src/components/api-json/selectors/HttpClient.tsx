import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { HttpClients } from '../../../cms'
import {
  dataCategoryAtom,
  dataQuantityAtom,
  dataSourceAtom,
  httpClientAtom
} from '../../../recoil-state'
import { CardSx, FormControlLabelSx } from '../../mui'

export default function HttpClientSelector() {
  const dataSource = useRecoilValue(dataSourceAtom)
  const dataCategory = useRecoilValue(dataCategoryAtom)
  const dataQuantity = useRecoilValue(dataQuantityAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  // const baseUrl = BaseUrlData.filter(base => base.index === apiProvider)[0].base

  // const providerUrls = apiProvider === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  // set max number requests to 10
  // const maxRequests = 10
  // const initialPostRequest = '1'

  // const [postRequests, setPostRequests] = React.useState<string>(initialPostRequest)

  // const handleChange = (event: SelectChangeEvent) => {
  //   setPostRequests(event.target.value as string)
  //   // setSelectedApi(`${baseUrl}${event.target.value}${postRequests}`)
  // }

  // filter base from BaseUrlData using selected provider (dataSource)
  // const baseUrl = BaseUrlData.filter(base => base.index === dataSource)[0].base

  const [httpClient, setHttpClient] = useRecoilState(httpClientAtom)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHttpClient((event.target as HTMLInputElement).value)
  }

  return (
    <>
      {((dataSource === 'randomDataApi' && dataCategory !== '') || dataQuantity !== '') && (
        <CardSx title='Http Client'>
          <FormControl fullWidth>
            <RadioGroup
              row
              id='provider-url-selector'
              aria-label='api request volume'
              name='api request volume'
              value={httpClient}
              onChange={handleChange}
              sx={{ pr: 0, pl: 10, justifyContent: 'space-around' }}>
              {HttpClients.map(item => (
                <FormControlLabelSx
                  disabled={item.value === '2'}
                  key={item.index}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardSx>
      )}
    </>
  )
}
