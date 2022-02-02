import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function SourceIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z' />
    </SvgIcon>
  )
}
