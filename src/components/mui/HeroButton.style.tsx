import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded'
import { Box } from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { alpha, styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

const HeroButton = styled((props: IconButtonProps) => <IconButton size='small' {...props} />, {
  name: 'HeroButton',
  slot: 'style'
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[600], 0.2)
      : alpha(BrandSwatch.Light.Grey[300], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[600], 0.8)
        : alpha(BrandSwatch.Light.Grey[300], 0.8),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[600], 0.2)
        : alpha(BrandSwatch.Light.Grey[400], 0.2)
  }
}))

interface ButtonSx {
  onClick: () => void
  disabled?: boolean
}

export default function HeroButtonSx({ onClick, disabled }: ButtonSx) {
  return (
    <Box sx={{ pr: 30 }}>
      <HeroButton onClick={onClick} disabled={disabled}>
        <KeyboardArrowUpRounded />
      </HeroButton>
    </Box>
  )
}
