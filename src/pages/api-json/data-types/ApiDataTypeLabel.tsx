import Typography from '@mui/material/Typography'
import { BrandSwatch } from '../../../style'

type ApiDataTypeLabelAlias = {
  type: string
  variant: 'edit' | 'ts'
}
export default function ApiDataTypeLabel({ type, variant }: ApiDataTypeLabelAlias) {
  return (
    <Typography
      variant='code'
      sx={{
        letterSpacing: variant === 'edit' ? '-0.04em' : 0,
        fontWeight: theme =>
          theme.palette.mode === 'dark'
            ? variant === 'edit'
              ? 400
              : 400
            : variant === 'edit'
            ? 500
            : 500,
        color: theme =>
          theme.palette.mode === 'dark'
            ? variant === 'edit'
              ? BrandSwatch.Dark.Grey[400]
              : BrandSwatch.Dark.Blue[400]
            : variant === 'edit'
            ? BrandSwatch.Light.Grey[600]
            : BrandSwatch.Light.Blue[500],
      }}>
      {type}&nbsp;
    </Typography>
  )
}
