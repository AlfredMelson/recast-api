import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function DownloadIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z' />
    </SvgIcon>
  )
}
