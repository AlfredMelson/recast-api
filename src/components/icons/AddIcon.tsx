import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function AddIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
    </SvgIcon>
  )
}
