import Link from '@mui/material/Link'
import { GithubIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function GithubToggle() {
  return (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/AlfredMelson/recast-api'>
      <ToolTipSx tooltipTitle='Github repo'>
        <IconButtonSxStyle>
          <GithubIcon />
        </IconButtonSxStyle>
      </ToolTipSx>
    </Link>
  )
}
