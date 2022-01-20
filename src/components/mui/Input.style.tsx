import InputBase from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { keyCodeAtom, selectedElementAtom } from '../../recoil-state'

type InputSxEditApiAlias = {
  currentValue: any
  dataKey: any
  onEdit: any
  quotes?: boolean
  onChange: (event: any) => void
}

export const InputSxEditApi = ({
  currentValue,
  dataKey,
  onEdit,
  onChange,
  quotes
}: InputSxEditApiAlias) => {
  const setSelectedElement = useSetRecoilState(selectedElementAtom)

  // keyboard interaction
  const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)
  const onKeyDown = React.useCallback(
    event => {
      setKeyCode(event.keyCode)
    },
    [setKeyCode]
  )
  const onKeyUp = React.useCallback(
    event => {
      if ((event.key === 'Enter' || event.keyCode === 13) && keyCode === event.keyCode) {
        event.preventDefault()
        onEdit(currentValue, dataKey)
        setSelectedElement(null)
      } else if ((event.key === 'Escape' || event.keyCode === 27) && keyCode === event.keyCode) {
        event.preventDefault()
        setSelectedElement(null)
      } else {
        //
      }
    },
    [currentValue, dataKey, keyCode, onEdit, setSelectedElement]
  )

  return (
    <InputBase
      autoFocus
      defaultValue={currentValue}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      startAdornment={
        <InputAdornment position='start'>
          <Typography variant='code'>{quotes && '"'}</Typography>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position='end'>
          <Typography variant='code'>{quotes && '"'}</Typography>
        </InputAdornment>
      }
    />
  )
}
