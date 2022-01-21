import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ArrowUpIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z' />
    </SvgIcon>
  )
}
