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

export const ButtonSxStyle = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: '', slot: '' }
)(({ theme }) => ({
  height: 40,
  minWidth: 96,
  ...theme.typography.body2,
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
        : alpha(BrandSwatch.Light.Grey[300], 0.6)
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
        : alpha(BrandSwatch.Light.Grey[300], 0.2)
  }
}))
