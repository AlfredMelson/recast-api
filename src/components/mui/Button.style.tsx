import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import { BrandSwatch } from '../../style'

/**
 * @name ButtonSxUserJsonDataToggle
 * @description
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const ButtonSxUserJsonDataToggle = styled((props: ButtonProps) => (
  <Button size='medium' variant='outlined' {...props} />
))(({ theme }) => ({
  minWidth: 128,
  margin: theme.spacing(10),
  fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
  borderWidth: theme.palette.mode === 'dark' ? 1 : 2,
  borderColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[800] : BrandSwatch.Light.Blue[500],
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[300] : BrandSwatch.Light.Blue[600],
  '&:hover': {
    borderColor: 'transparent',
    borderWidth: theme.palette.mode === 'dark' ? 1 : 2,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[700] : BrandSwatch.Light.Blue[500],
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[50],
  },
  '&.Mui-focused': {
    color: '#007FFF',
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[800] : BrandSwatch.Light.Blue[500],
  },
  '&.Mui-disabled': {
    color: 'transparent',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))

/**
 * @name ButtonSxApiJsonEditItem
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const ButtonSxApiJsonEditItem = styled((props: ButtonProps) => (
  <Button size='small' variant='text' {...props} />
))(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'none',
    padding: theme.spacing(0, 8),
    borderRadius: 3,
  },
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}))

/**
 * @name ButtonSxStyle
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const ButtonSxStyle = styled((props: ButtonProps) => (
  <Button size='small' variant='text' {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  minWidth: 96,
  height: 40,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.2),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused ': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor: theme.palette.background.default,
  },
}))

/**
 * @name LoadingButtonSxStyle
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const LoadingButtonSxStyle = styled((props: LoadingButtonProps) => (
  <LoadingButton size='small' variant='text' {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  minWidth: 90,
  minHeight: 30,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.2),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused ': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor: theme.palette.background.default,
  },
}))

/**
 * @name ButtonSxControls
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type ButtonSxControlsAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: React.FormEventHandler<HTMLButtonElement>
  props?: ButtonProps
}

export const ButtonSxControls = ({
  id,
  value,
  onChange,
  children,
  ...props
}: ButtonSxControlsAlias) => {
  return (
    <Box sx={{ m: 10 }}>
      <ButtonSxStyle id={id} value={value} onChange={onChange} {...props}>
        {children}
      </ButtonSxStyle>
    </Box>
  )
}
