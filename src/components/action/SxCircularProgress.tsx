import CircularProgress from '@mui/material/CircularProgress'
import { BrandSwatch } from '../../style'

type SxCircularProgressAlias = {
  size: '16px' | '20px'
  color: 'blue' | 'green'
}

export function SxCircularProgress({ size, color }: SxCircularProgressAlias) {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: color === 'green' ? BrandSwatch.Light.Green[500] : BrandSwatch.Light.Blue[400],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: size === '16px' ? '-4px' : '-9px',
        marginLeft: size === '16px' ? '-12px' : '-9px'
      }}
    />
  )
}
