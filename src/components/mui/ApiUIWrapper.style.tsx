import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { BrandSwatch } from '../../style'

type ApiUIWrapperAlias = {
  children: React.ReactNode
  title?: string
  sx?: SxProps
}

export const ApiUIWrapper = ({ title, sx, children }: ApiUIWrapperAlias) => {
  return (
    <Stack
      direction='column'
      justifyContent='space-around'
      alignItems='flex-start'
      sx={{
        minHeight: 104,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 1,
        borderColor: 'transparent',
        color: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
        backgroundColor: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[50],
      }}>
      <Typography gutterBottom variant='body2' sx={sx}>
        {title}
      </Typography>
      {children}
    </Stack>
  )
}
