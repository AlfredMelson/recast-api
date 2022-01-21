import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ArrowDownIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
    </SvgIcon>
  )
}
