import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function CategoryIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='m12 2-5.5 9h11z' />
      <circle cx='17.5' cy='17.5' r='4.5' />
      <path d='M3 13.5h8v8H3z' />
    </SvgIcon>
  )
}
