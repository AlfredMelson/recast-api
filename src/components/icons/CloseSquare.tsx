import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function CloseSquare(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon className='close' fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z' />
    </SvgIcon>
  )
}
