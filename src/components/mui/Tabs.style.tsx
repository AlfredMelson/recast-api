import Tabs from '@mui/material/Tabs'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'

/**
 * @name TabWrapperSx
 * @description styles API Tabs
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return styled Tabs
 */

type TabWrapperSxAlias = {
  value?: number
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  children?: React.ReactNode
}

export const TabWrapperSx = styled((props: TabWrapperSxAlias) => (
  <Tabs
    allowScrollButtonsMobile
    selectionFollowsFocus
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    {...props}
  />
))(({ theme }) => ({
  '.MuiButtonBase-root, .MuiTab-root': {
    borderRadius: '3px 3px 0 0',
    margin: theme.spacing(0, 2, 0, 0),
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
    borderStyle: 'solid',
    borderWidth: theme.spacing(1, 1, 0),
    borderColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],

    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor:
        theme.palette.mode === 'dark'
          ? alpha(BrandSwatch.Dark.Grey[700], 0.7)
          : alpha(BrandSwatch.Light.Grey[200], 0.7),
      color: theme.palette.text.secondary,
    },
    '&.Mui-selected': {
      borderColor: 'transparent',
      backgroundColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
      color: theme.palette.text.primary,
      transform: 'translateY(1px)',
    },
  },

  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
}))
