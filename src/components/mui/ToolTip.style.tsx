import Tooltip from '@mui/material/Tooltip'

type ToolTipSxAlias = {
  children: React.ReactElement
  tooltipTitle?: string
  disabled?: boolean
}

export function ToolTipSx({ tooltipTitle, children, disabled }: ToolTipSxAlias) {
  return (
    <Tooltip
      title={`${tooltipTitle}`}
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}>
      {children}
    </Tooltip>
  )
}
