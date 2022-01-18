import Link from '@mui/material/Link'
import { GithubIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function GithubToggle() {
  return (
    <ToolTipSx tooltipTitle='Github repo'>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/AlfredMelson/recast-api'>
        <IconButtonSxStyle>
          <GithubIcon />
        </IconButtonSxStyle>
      </Link>
    </ToolTipSx>
  )
}
