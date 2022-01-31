import { MoreVertIcon } from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export default function MoreInfoToggle() {
  return (
    <ToolTipSx tooltipTitle='Project Notes'>
      <IconButtonSxStyle>
        <MoreVertIcon />
      </IconButtonSxStyle>
    </ToolTipSx>
  )
}
