import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { VolumeSelector } from '../../../cms'
import { dataQuantityAtom, dataSourceAtom } from '../../../recoil'
import { ApiUIWrapper } from '../../mui'

export default function DataQuantitySelector() {
  const dataSource = useRecoilValue(dataSourceAtom)
  console.log('dataSource', dataSource)

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
    <Box component='div'>
      {dataSource !== 'randomDataApi' ||
        ('' && (
          <ApiUIWrapper title='Volume' sx={{ ml: 20, pt: 8 }}>
            <FormControl component='fieldset' sx={{ pb: 12 }}>
              <RadioGroup
                row
                id='provider-url-selector'
                aria-label='api request volume'
                name='api request volume'
                value={dataQuantity}
                onChange={handleChange}
                sx={{ pr: 10, pl: 20 }}>
                {VolumeSelector.map(item => (
                  <FormControlLabel
                    key={item.index}
                    sx={{ px: 5, py: 0 }}
                    value={item.value}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </ApiUIWrapper>
        ))}
    </Box>
  )
}
