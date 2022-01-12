import * as React from 'react'
import { useRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import { selectedApiAtom, userTypedUrlAtom } from '../../../recoil'
import { ApiUIWrapper, InputBaseSx } from '../../mui'

export default function DataSearchBar() {
  // user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)

  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.FormEvent<HTMLInputElement>) => {
    setUserTypedUrl(event.currentTarget.value), setSelectedApi(event.currentTarget.value)
  }

  const [selectedApi, setSelectedApi] = useRecoilState(selectedApiAtom)

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
          value={selectedApi !== '' ? selectedApi : userTypedUrl}
          onChange={handleTextFieldChanges}
        />
      </ApiUIWrapper>
    </Box>
  )
}
