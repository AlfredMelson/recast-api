import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style'

/**
 * @REVIEW
 * @name HeroStyle
 * @description
 * @param {Div} HTMLElement
 * @param {styled} mui styled
 * @return app bar style
 */

const HeroWrapper = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
  borderRadius: 3
}))

type HeroStyleAlias = {
  children: React.ReactNode
}

export function HeroStyle({ children }: HeroStyleAlias) {
  return (
    <HeroWrapper>
      <Box sx={{ p: 20 }}>{children}</Box>
    </HeroWrapper>
  )
}
