import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

export const ButtonSxApiJsonEditItem = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  '.MuiButton-root': {
    textTransform: 'none',
    padding: theme.spacing(0, 8),
    borderRadius: 3
  },
  '&:hover': {
    backgroundColor: theme.palette.background.default
  }
}))

export const ButtonStyle = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: 'Button', slot: 'style' }
)(({ theme }) => ({
  minWidth: 96,
  ...theme.typography.body2,
  height: 40,
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
        : alpha(BrandSwatch.Light.Grey[300], 0.2)
  }
}))

export const AccordionButton = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: 'Button', slot: 'style' }
)(({ theme }) => ({
  textTransform: 'none',
  ...theme.typography.caption,
  height: 36,
  padding: theme.spacing(0, 20),
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
        : alpha(BrandSwatch.Light.Grey[300], 0.2)
  }
}))
