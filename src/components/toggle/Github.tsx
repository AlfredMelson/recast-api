import GitHubIcon from '@mui/icons-material/GitHub'
import { ToolTipSx } from '../mui'
import { IconButtonSxColorMode } from '../mui/IconButton.style'

export function GithubToggle() {
  return (
    <ToolTipSx tooltipTitle='Github'>
      <IconButtonSxColorMode>
        <GitHubIcon fontSize='medium' />
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
