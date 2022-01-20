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
  (props: TabWrapperSxAlias) => <Tabs allowScrollButtonsMobile selectionFollowsFocus {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  '.MuiTab-root': {
    margin: theme.spacing(0, 6, 0, 0),
    backgroundColor:
      theme.palette.mode === 'dark'
        ? BrandSwatch.Dark.Grey[800]
        : alpha(BrandSwatch.Light.Grey[200], 0.5),
    color: theme.palette.text.secondary,
    '&:hover, &.Mui-focused ': {
      backgroundColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
      color: theme.palette.text.primary
    },
    '&.Mui-selected': {
      transform: 'translateY(1px)',
      cursor: 'default',
      color: theme.palette.text.primary,
      backgroundColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200]
    }
  }
}))
