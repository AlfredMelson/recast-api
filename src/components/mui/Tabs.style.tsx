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
    zIndex: 0,
    borderRadius: '3px 3px 0 0',
    margin: theme.spacing(0, 2, 0, 0),
    // backgroundColor:
    //   theme.palette.mode === 'dark'
    //     ? alpha(BrandSwatch.Dark.Grey[700], 0.5)
    //     : alpha(BrandSwatch.Light.Grey[300], 0.7),
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.5)
        : alpha(BrandSwatch.Light.Grey[300], 0.7),
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    }),
    '&:hover, &.Mui-focused ': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? alpha(BrandSwatch.Dark.Grey[700], 0.7)
          : alpha(BrandSwatch.Light.Grey[300], 0.5),
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
