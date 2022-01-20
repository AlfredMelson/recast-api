import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'

const SelectSxStyle = styled(
  (props?: SelectProps) => <Select autoWidth disableUnderline={true} {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  fontSize: 16,
  height: 40,
  paddingLeft: 20,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 3,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[300], 0.2),
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200]
  },
  '&.Mui-focused ': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[600], 0.8)
        : alpha(BrandSwatch.Light.Grey[300], 0.6),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default
  }
}))

type SelectSxAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  props?: SelectProps
}

export const SelectSx = ({ id, value, onChange, onClick, children, ...props }: SelectSxAlias) => {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 240
      }
    }
  }

  return (
    <SelectSxStyle
      MenuProps={MenuProps}
      id={id}
      value={value}
      onChange={onChange}
      onClick={onClick}
      {...props}>
      {children}
    </SelectSxStyle>
  )
}
