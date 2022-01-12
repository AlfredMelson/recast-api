import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { BaseUrlData, JsonPlaceholderData, RandomData } from '../../../cms'
import { SelectSx, ApiUIWrapper } from '../../mui'
import { selectedApiAtom, selectedApiProviderAtom } from '../../../recoil'

export default function DataCategorySelector() {
  const apiProvider = useRecoilValue(selectedApiProviderAtom)

  const [providerUrl, setProviderUrl] = React.useState<string>('')

  const setSelectedApi = useSetRecoilState(selectedApiAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  const baseUrl = BaseUrlData.filter(base => base.index === apiProvider)[0].base

  const providerUrls = apiProvider === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  const handleChange = (event: SelectChangeEvent) => {
    setProviderUrl(event.target.value as string)
    setSelectedApi(`${baseUrl}${event.target.value}`)
  }

  return (
    <Box component='div'>
      {apiProvider !== '' && (
        <ApiUIWrapper title='Data' sx={{ mt: 10, ml: 20, mb: 0 }}>
          <FormControl>
            <SelectSx id='provider-url-selector' value={providerUrl} onChange={handleChange}>
              {providerUrls.map(item => (
                <MenuItem key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectSx>
          </FormControl>
        </ApiUIWrapper>
      )}
    </Box>
  )
}
