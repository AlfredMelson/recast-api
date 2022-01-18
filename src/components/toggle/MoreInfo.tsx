import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function MoreInfoToggle() {
  return (
    <ToolTipSx tooltipTitle='Project Notes'>
      <IconButtonSxStyle>
        <MoreVertIcon fontSize='medium' />
      </IconButtonSxStyle>
    </ToolTipSx>
  )
}
