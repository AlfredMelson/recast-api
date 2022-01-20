import { styled } from '@mui/material/styles'
import * as React from 'react'

const PanelWrapper = styled('div')(() => ({
  position: 'relative'
}))

type PanelStyleAlias = {
  children: React.ReactNode
}

export function PanelStyle({ children }: PanelStyleAlias) {
  return <PanelWrapper>{children}</PanelWrapper>
}
