import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function SubtractIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M19 13H5v-2h14v2z' />
    </SvgIcon>
  )
}
