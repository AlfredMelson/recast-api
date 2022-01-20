import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { VolumeSelector } from '../../../cms'
import { dataCategoryAtom, dataQuantityAtom, dataSourceAtom } from '../../../recoil-state'
import { CardSx, FormControlLabelSx } from '../../mui'

export default function DataQuantitySelector() {
  const dataSource = useRecoilValue(dataSourceAtom)

  const dataCategory = useRecoilValue(dataCategoryAtom)

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

  const [dataQuantity, setDataQuantity] = useRecoilState(dataQuantityAtom)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataQuantity((event.target as HTMLInputElement).value)
  }

  return (
    <>
      {dataSource === 'jsonPlaceholderApi' && dataCategory !== '' && (
        <CardSx title='Volume'>
          <FormControl fullWidth>
            <RadioGroup
              row
              id='provider-url-selector'
              aria-label='api request volume'
              name='api request volume'
              value={dataQuantity}
              onChange={handleChange}
              sx={{ pr: 10, pl: 20 }}>
              {VolumeSelector.map(item => (
                <FormControlLabelSx
                  key={item.index}
                  sx={{ px: 5, py: 0 }}
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
