import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import * as React from 'react'
import { ApiSelector, ApiTabs } from '../../components/api-json'
import { DataFetch, DataSearchBar } from '../../components/api-json/selectors'
import { HeroSx } from '../../components/mui'
import { ErrorBoundary } from '../../lib'

const HeroTypography = styled(
  (props: TypographyProps) => <Typography variant='body2' {...props} />,
  { name: 'Hero', slot: 'typography' }
)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  margin: theme.spacing(20, 0, 10, 10)
}))

export function ApiJson() {
  return (
    <Box>
      <HeroSx>
        <HeroTypography>Select API from dropdown</HeroTypography>
        <ApiSelector />
        <HeroTypography>or Enter API</HeroTypography>
        <Stack direction='row' spacing={20}>
          <DataSearchBar />
          <DataFetch />
        </Stack>
      </HeroSx>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ApiTabs />
        </React.Suspense>
      </ErrorBoundary>
    </Box>
  )
}
