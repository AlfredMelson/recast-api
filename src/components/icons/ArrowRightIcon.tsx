import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ArrowRightIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
    </SvgIcon>
  )
}
