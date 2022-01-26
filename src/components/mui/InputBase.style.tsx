import { SxProps } from '@mui/material'
import InputBase, { InputProps } from '@mui/material/Input'
import { alpha, styled } from '@mui/material/styles'
import { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { keyCodeAtom, selectedElementAtom } from '../../recoil-state'
import { BrandSwatch } from '../../style'

const InputBaseStyle = styled(
  (props?: InputProps) => (
    <InputBase size='small' autoComplete='off' fullWidth disableUnderline={true} {...props} />
  ),
  {
    name: 'InputBase',
    slot: 'style'
  }
)(({ theme }) => ({
  ...theme.typography.body2,
  height: 50,
  paddingLeft: theme.spacing(20),
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  }
}))

type InputBaseSxAlias = {
  currentValue?: string
  dataKey?: string
  onEdit?: (dataKey: string, value: string) => void
  placeholder: string
  value: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  sx?: SxProps
  props?: InputProps
}

export const InputBaseSx = ({
  // currentValue,
  // dataKey,
  // onEdit,
  placeholder,
  value,
  onChange,
  sx,
  ...props
}: InputBaseSxAlias) => {
  const setSelectedElement = useSetRecoilState(selectedElementAtom)

  // Keyboard interaction
  const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)

  const onKeyDown = useCallback(
    event => {
      setKeyCode(event.keyCode)
    },
    [setKeyCode]
  )
  const onKeyUp = useCallback(
    event => {
      if ((event.key === 'Enter' || event.keyCode === 13) && keyCode === event.keyCode) {
        event.preventDefault()
        // onEdit(currentValue, dataKey)
        setSelectedElement(null)
      } else if ((event.key === 'Escape' || event.keyCode === 27) && keyCode === event.keyCode) {
        event.preventDefault()
        setSelectedElement(null)
      } else {
        //
      }
    },
    [keyCode, setSelectedElement]
  )

  return (
    <InputBaseStyle
      placeholder={placeholder}
      value={value}
      // defaultValue={currentValue}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      sx={sx}
      {...props}
    />
  )
}
