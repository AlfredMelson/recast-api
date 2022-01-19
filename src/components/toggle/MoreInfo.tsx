import { MoreVertIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function MoreInfoToggle() {
  return (
    <ToolTipSx tooltipTitle='Project Notes'>
      <IconButtonSxStyle>
        <MoreVertIcon />
      </IconButtonSxStyle>
    </ToolTipSx>
  )
}
