import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButtonSxColorMode, ToolTipSx } from '../mui'

export function MoreInfoToggle() {
  return (
    <ToolTipSx tooltipTitle='Project Notes'>
      <IconButtonSxColorMode>
        <MoreVertIcon fontSize='medium' />
      </IconButtonSxColorMode>
    </ToolTipSx>
  )
}
