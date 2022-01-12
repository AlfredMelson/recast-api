import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Box from '@mui/material/Box'
import {
  dataCategoryAtom,
  dataQuantityAtom,
  dataSourceAtom,
  // userTypedUrlAtom,
  dataUrlAtom,
} from '../../../recoil'
import { ApiUIWrapper, InputBaseSx } from '../../mui'
import { BaseUrlData } from '../../../cms'

export default function DataSearchBar() {
  // user entered api url stored in recoil
  // const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)

  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.FormEvent<HTMLInputElement>) => {
    // setUserTypedUrl(event.currentTarget.value),
    setDataUrl(event.currentTarget.value)
  }

  const [dataUrl, setDataUrl] = useRecoilState(dataUrlAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const dataQuantity = useRecoilValue(dataQuantityAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  const providerBaseUrl = BaseUrlData.filter(base => base.index === dataSource)[0].base

  const dataCategory = useRecoilValue(dataCategoryAtom)
  // filter base from BaseUrlData using selected provider (apiProvider)

  React.useEffect(() => {
    const addQuantity = dataSource === 'randomDataApi'
    if (addQuantity) {
      setDataUrl(`${providerBaseUrl}${dataCategory}`)
      return
    } else {
      setDataUrl(`${providerBaseUrl}${dataCategory}${dataQuantity}`)
      return
    }
  }, [providerBaseUrl, setDataUrl, dataCategory, dataQuantity, dataSource])

  // const inputField = React.useRef<HTMLInputElement>(null)
  // ref = { inputField }

  return (
    <Box sx={{ flex: 1 }}>
      <ApiUIWrapper title='Api Url' sx={{ mt: 10, ml: 20, mb: 0 }}>
        <InputBaseSx
          sx={{
            m: 10,
            pl: 20,
            width: 'calc(100% - 20px)',
            fontSize: 16,
            height: 40,
          }}
          placeholder='Enter url ...'
          value={dataUrl}
          onChange={handleTextFieldChanges}
        />
      </ApiUIWrapper>
    </Box>
  )
}
