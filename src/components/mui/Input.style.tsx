import InputBase from '@mui/material/Input'
import Typography from '@mui/material/Typography'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import { keyCodeAtom } from '../../recoil'
import { selectedElementAtom } from '../../recoil/api-json/atom'

/**
 * @name InputSxEditApi
 * @description
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return style for edit icon button
 */

type InputSxEditApiAlias = {
  currentValue: any
  dataKey: any
  onEdit: any
  quotes?: boolean
  onChange: (event: any) => void
  // onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export const InputSxEditApi = ({
  currentValue,
  dataKey,
  onEdit,
  onChange,
  quotes,
}: InputSxEditApiAlias) => {
  const setSelectedElement = useSetRecoilState(selectedElementAtom)

  // Keyboard interaction
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
