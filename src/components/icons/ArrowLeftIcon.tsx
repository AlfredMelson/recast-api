import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ArrowLeftIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
    </SvgIcon>
  )
}
