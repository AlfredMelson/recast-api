import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '@mui/material/Link'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'

export function GithubToggle() {
  return (
    <ToolTipSx tooltipTitle='Github repo'>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/AlfredMelson/recast-api'>
        <IconButtonSxColorMode>
          <GitHubIcon fontSize='medium' />
        </IconButtonSxColorMode>
      </Link>
    </ToolTipSx>
  )
}
