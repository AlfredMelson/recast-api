import { styled } from '@mui/material/styles'

/**
 * Customized wrapper component for styling navigation items in the header section.
 *
 * Component: Navigation.styles.ts
 *
 * Classname: Navigation-wrapper
 *
 * [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) : Navigation Section element
 *
 * Mui [styled()](https://mui.com/system/styled) : Utility for creating styled components
 *
 */

export const Navigation = styled('nav', {
  name: 'Navigation',
  slot: 'wrapper'
})(({ theme }) => ({
  ...theme.typography.body2,
  cursor: 'default',
  textDecoration: 'none',
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.text.primary
  }
}))
