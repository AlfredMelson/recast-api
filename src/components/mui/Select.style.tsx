import Box from '@mui/material/Box'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'

/**
 * @name SelectSxStyle
 * @description styles API Tab Panel
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return
 */

const SelectSxStyle = styled((props?: SelectProps) => (
  <Select autoWidth disableUnderline={true} {...props} />
))(({ theme }) => ({
  fontSize: 16,
  height: 40,
  paddingLeft: 20,
  display: 'flex',
  alignItems: 'center',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.2),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
    borderRadius: 3
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor: theme.palette.background.default
  }
}))

/**
 * @name SelectSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type SelectSxAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
  props?: SelectProps
}

export const SelectSx = ({ id, value, onChange, children, ...props }: SelectSxAlias) => {
  return (
    <Box sx={{ m: 10 }}>
      <SelectSxStyle id={id} value={value} onChange={onChange} {...props}>
        {children}
      </SelectSxStyle>
    </Box>
  )
}
