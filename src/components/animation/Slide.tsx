import Box, { BoxProps } from '@mui/material/Box'

type SlideAlias = {
  animationName: any
  keyframes: any
}

export default function Slide({ animationName, keyframes, ...props }: BoxProps & SlideAlias) {
  return (
    <Box
      {...props}
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content',
        gap: { xs: 2, sm: 4, md: 8 },
        width: 'min-content',
        animation: `${animationName} 30s ease-out forwards`,
        '@media (prefers-reduced-motion)': {
          animation: 'none'
        },
        [`@keyframes ${animationName}`]: {
          ...keyframes
        },
        ...props.sx
      }}
    />
  )
}
