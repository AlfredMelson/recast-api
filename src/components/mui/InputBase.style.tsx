import InputBase, { InputProps } from '@mui/material/Input'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as React from 'react'
import { alpha, styled } from '@mui/material'
import { SxProps } from '@mui/system'
import { keyCodeAtom } from '../../recoil'
import { selectedElementAtom } from '../../recoil/api-json/atom'
import { BrandSwatch } from '../../style'

/**
 * @name InputBaseSxStyle
 * @description styles API Tab Panel
 * @param {InputBase} mui
 * @param {styled} mui
 * @return
 */

const InputBaseSxStyle = styled(
  (props?: InputProps) => (
    <InputBase size='small' autoComplete='off' fullWidth disableUnderline={true} {...props} />
  ),
  {
    name: 'SearchBar',
    slot: 'input',
  }
)(({ theme }) => ({
  fontSize: 16,
  height: 50,
  paddingLeft: 20,
  display: 'flex',
  alignItems: 'center',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.2),
  border: '1px solid',
  borderRadius: 3,
  // borderColor:
  //   theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
  borderColor: 'transparent',
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused ': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
    border: '1px solid transparent',
    borderRadius: 3,
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
  },
}))

/**
 * @name InputBaseSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type InputBaseSxAlias = {
  currentValue?: string
  dataKey?: string
  onEdit?: (dataKey: string, value: string) => void
  placeholder: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
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
    <InputBaseSxStyle
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

// /**
//  * @name InputBaseSxStyle
//  * @description
//  * @param {IconButton} mui IconButton
//  * @param {theme} MuiBrandingTheme
//  * @param {styled} mui styled
//  * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
//  * {focus visible}	:focus-visible, {focus within}	:focus-within
//  * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
//  * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
//  * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
//  * @return style for edit icon button
//  */

// type InputBaseSxStyleAlias = {
//   currentValue: any
//   dataKey: any
//   onEdit: any
//   quotes?: boolean
//   onChange: (event: any) => void
// }

// export const InputBaseSxStyle = ({
//   currentValue,
//   dataKey,
//   onEdit,
//   onChange,
//   quotes,
// }: InputBaseSxStyleAlias) => {
//   const setSelectedElement = useSetRecoilState(selectedElementAtom)

//   // Keyboard interaction
//   const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)
//   const onKeyDown = React.useCallback(
//     event => {
//       setKeyCode(event.keyCode)
//     },
//     [setKeyCode]
//   )
//   const onKeyUp = React.useCallback(
//     event => {
//       if ((event.key === 'Enter' || event.keyCode === 13) && keyCode === event.keyCode) {
//         event.preventDefault()
//         onEdit(currentValue, dataKey)
//         setSelectedElement(null)
//       } else if ((event.key === 'Escape' || event.keyCode === 27) && keyCode === event.keyCode) {
//         event.preventDefault()
//         setSelectedElement(null)
//       } else {
//         //
//       }
//     },
//     [currentValue, dataKey, keyCode, onEdit, setSelectedElement]
//   )

//   return (
//     <InputBase
//       autoFocus
//       defaultValue={currentValue}
//       onChange={onChange}
//       onKeyUp={onKeyUp}
//       onKeyDown={onKeyDown}
//       startAdornment={
//         <InputAdornment position='start'>
//           <Typography variant='code'>{quotes && '"'}</Typography>
//         </InputAdornment>
//       }
//       endAdornment={
//         <InputAdornment position='end'>
//           <Typography variant='code'>{quotes && '"'}</Typography>
//         </InputAdornment>
//       }
//     />
//   )
// }
