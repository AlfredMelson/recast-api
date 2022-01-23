import { alpha, styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import { BrandSwatch } from '../../style'

type TabWrapperSxAlias = {
  value?: number
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  children?: React.ReactNode
}

export const TabWrapperSx = styled(
  (props: TabWrapperSxAlias) => (
    <Tabs variant='scrollable' scrollButtons='auto' selectionFollowsFocus {...props} />
  ),
  { name: 'Tab', slot: 'style' }
)(({ theme }) => ({
  '.MuiTab-root': {
    marginRight: theme.spacing(6),
    color: theme.palette.text.secondary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? BrandSwatch.Dark.Grey[800]
        : alpha(BrandSwatch.Light.Grey[200], 0.5),
    boxShadow: theme.shadows[0],
    '&:hover, &.Mui-focused ': {
      color: theme.palette.text.primary,
      backgroundColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
      boxShadow: theme.shadows[1]
    },
    '&.Mui-selected': {
      transform: 'translateY(1px)',
      cursor: 'default',
      color: theme.palette.text.primary,
      backgroundColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
      boxShadow: theme.shadows[2]
    },
    '&.Mui-disabled': {
      transform: 'translateY(1px)',
      cursor: 'default',
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      boxShadow: theme.shadows[0]
    }
  }
}))
