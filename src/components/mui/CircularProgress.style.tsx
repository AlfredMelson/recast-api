import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

const CircularProgressStyle = styled(
  (props: CircularProgressProps) => <CircularProgress size={20} {...props} />,
  {
    name: 'CircularProgress',
    slot: 'style'
  }
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Green[500] : BrandSwatch.Light.Green[500],
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-9px',
  marginLeft: '-9px'
}))

export default CircularProgressStyle
