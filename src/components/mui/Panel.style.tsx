import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

const PanelWrapper = styled('div')(() => ({
  position: 'relative'
}))

type PanelStyleAlias = {
  children: ReactNode
}

export function PanelStyle({ children }: PanelStyleAlias) {
  return <PanelWrapper>{children}</PanelWrapper>
}
