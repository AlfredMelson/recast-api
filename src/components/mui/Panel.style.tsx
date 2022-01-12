import { styled } from '@mui/material/styles'
import * as React from 'react'

/**
 * @REVIEW
 * @name PanelStyle
 * @description
 * @param {Div} HTMLElement
 * @param {styled} mui styled
 * @return
 */

const PanelWrapper = styled('div')(() => ({
  position: 'relative',
  overflow: 'hidden',
}))

type PanelStyleAlias = {
  children: React.ReactNode
}

export function PanelStyle({ children }: PanelStyleAlias) {
  return <PanelWrapper>{children}</PanelWrapper>
}
