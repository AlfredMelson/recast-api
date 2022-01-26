import Box from '@mui/material/Box'
import { FormEvent } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { dataUrlAtom, selectedApiSelector } from '../../../recoil-state'
import { CardSx, InputBaseSx } from '../../mui'

export default function SearchBar() {
  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: FormEvent<HTMLInputElement>) => {
    // setUserTypedUrl(event.currentTarget.value),
    setDataUrl(event.currentTarget.value)
    setSelectedApi(event.currentTarget.value)
  }

  const setDataUrl = useSetRecoilState(dataUrlAtom)

  const [selectedApi, setSelectedApi] = useRecoilState(selectedApiSelector)

  // const inputField = useRef<HTMLInputElement>(null)
  // ref = { inputField }

  return (
    <Box sx={{ width: '100%' }}>
      <CardSx title={selectedApi ? 'Selected Url ' : 'Typed Url'}>
        <InputBaseSx
          sx={{
            pl: 20,
            width: '100%',
            fontSize: 16,
            height: 40
          }}
          placeholder='Enter url ...'
          value={selectedApi}
          onChange={handleTextFieldChanges}
        />
      </CardSx>
    </Box>
  )
}
