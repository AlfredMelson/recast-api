import Box from '@mui/material/Box'
import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { BaseUrlData } from '../../../cms'
import {
  dataCategoryAtom,
  dataQuantityAtom,
  dataSourceAtom,
  // userTypedUrlAtom,
  dataUrlAtom
} from '../../../recoil'
import { CardSx, InputBaseSx } from '../../mui'

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
      <CardSx title='Api Url'>
        <InputBaseSx
          sx={{
            pl: 20,
            width: '100%',
            fontSize: 16,
            height: 40
          }}
          placeholder='Enter url ...'
          value={dataUrl}
          onChange={handleTextFieldChanges}
        />
      </CardSx>
    </Box>
  )
}
