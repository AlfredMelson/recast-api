import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

/**
 * @name IconButtonSxColorMode
 * @description manage the style of the app color mode icon button
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxColorMode = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[100] : BrandSwatch.Light.Grey[800],
  padding: theme.spacing(10),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900]
  }
}))

/**
 * @name IconButtonSxApiIcons
 * @description manage the style of the interactive icons within API Json
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */

export const IconButtonSxApiIcons = styled((props: IconButtonProps) => <IconButton {...props} />)(
  ({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
    margin: theme.spacing(0, 5),
    padding: theme.spacing(0),
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    }),
    '&:hover, & .Mui-focused': {
      color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900]
    }
  })
)

/**
 * @name IconButtonSxApiEdit
 * @description manage the style of the edit icons within API Json
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

export const IconButtonSxApiEdit = styled(IconButton)(({ theme }) => ({
  '.Mui-disabled': {
    color: theme.palette.mode === 'dark' ? '#000000' : theme.palette.grey[900]
  },
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  padding: theme.spacing(5),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900]
  }
}))

/**
 * @name IconButtonSxAppBar
 * @description manage the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxAppBar = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(10),
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[100] : BrandSwatch.Light.Grey[800],
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900]
  }
}))

/**
 * @name IconButtonSxTsInterface
 * @description manage the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxTsInterface = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(10),
  backgroundColor: BrandSwatch.Dark.Grey[900],
  transition: theme.transitions.create(['color', 'backgroundColor'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused': {
    backgroundColor: BrandSwatch.Dark.Grey[800],
    color: '#007FFF'
  }
}))

/**
 * @name IconButtonSx
 * @description manage
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSx = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(10),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, & .Mui-focused': {
    color: '#007FFF'
  },
  '& > div': {
    cursor: 'default'
  }
}))

/**
 * @name IconButtonSxDataIcon
 * @description manage
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxDataIcon = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, & .Mui-focused': {
    color: '#007FFF'
  }
}))
