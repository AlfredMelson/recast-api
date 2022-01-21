import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function MoreVertIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
    </SvgIcon>
  )
}
