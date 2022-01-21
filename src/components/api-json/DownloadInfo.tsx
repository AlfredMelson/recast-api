import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { BrandSwatch } from '../../style'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons'

export default function DownloadInfo({
  appeared,
  content,
  ...props
}: { appeared: boolean; content?: React.ReactElement } & BoxProps) {
  const [hidden, setHidden] = React.useState(true)
  return (
    <Box
      {...props}
      sx={{
        bottom: 0,
        top: 0,
        right: 0,
        px: 20,
        pt: 10,
        pb: 20,
        position: 'absolute',
        zIndex: 1,
        transform: hidden || !appeared ? 'translateX(100%)' : 'translateX(0)',
        transition: theme =>
          theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut
          }),
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Pink[500],
        minWidth: 200,
        borderRadius: '0 0 3px 0',
        boxShadow: 1,
        ...props.sx
      }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0
        }}>
        <IconButton
          aria-label={hidden ? 'show' : 'hide'}
          onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            left: 10,
            top: 30,
            transform: hidden || !appeared ? 'translateX(-74px)' : 'translateX(20%)',
            opacity: appeared ? 1 : 0,
            transition: theme =>
              theme.transitions.create(['backgroundColor', 'transform'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut
              }),
            bgcolor: BrandSwatch.Dark.Grey[900],
            '&:hover, &.Mui-focused': {
              bgcolor: BrandSwatch.Dark.Grey[800]
            }
          }}>
          {hidden ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </IconButton>
        <Box sx={{ pt: 90 }}>{content}</Box>
      </Box>
    </Box>
  )
}
