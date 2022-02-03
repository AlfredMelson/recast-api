import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { alpha } from '@mui/material/styles'
import { BrandSwatch } from '../../style'
import { CategoryIcon, SourceIcon } from '../icons'

interface HeroChip {
  variant: 'filled' | 'outlined'
  label: string
  iconref?: 'category' | 'source'
  onClick?: () => void
}

export default function HeroChip({ iconref, variant, label, onClick }: HeroChip) {
  const assocIcon =
    iconref === 'category' ? <CategoryIcon /> : iconref === 'source' ? <SourceIcon /> : null

  return (
    <Box sx={{ pr: 20 }}>
      {iconref ? (
        <Chip variant={variant} icon={assocIcon} label={label} onClick={onClick} />
      ) : (
        <Chip
          variant={variant}
          label={label}
          onClick={onClick}
          sx={{
            cursor: 'default',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Green[200]
                : BrandSwatch.Light.Green[500],
            '&:hover, &.Mui-focused, &.Mui-selected': {
              color: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Green[200]
                  : BrandSwatch.Light.Green[500],
              backgroundColor: theme =>
                theme.palette.mode === 'dark'
                  ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
                  : alpha(BrandSwatch.Light.Grey[200], 0.5),
              boxShadow: theme => theme.shadows[0]
            }
          }}
        />
      )}
    </Box>
  )
}
