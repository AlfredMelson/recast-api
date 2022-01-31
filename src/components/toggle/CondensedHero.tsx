import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { condensedHeroAtom } from '../../recoil-state'

export default function CondensedHero({
  appeared,
  content,
  ...props
}: { appeared: boolean; content?: React.ReactElement } & BoxProps) {
  const [condensedHero, setCondensedHero] = useRecoilState(condensedHeroAtom)

  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        bottom: 0,
        transform: condensedHero || !appeared ? 'translateY(100%)' : 'translateY(0)',
        transition: '0.3s',
        left: 0,
        right: 0,
        px: 2,
        pt: 1,
        pb: 2,
        bgcolor: ({ palette }) => palette.background.default,
        backdropFilter: 'blur(8px)',
        zIndex: 1,
        borderTop: '1px solid',
        borderColor: 'divider',
        borderRadius: '0 0 10px 10px',
        ...props.sx
      }}>
      <IconButton
        aria-label={condensedHero ? 'show' : 'hide'}
        onClick={() => setCondensedHero(bool => !bool)}
        sx={{
          position: 'absolute',
          zIndex: 2,
          transition: '0.3s',
          right: 10,
          bottom: '100%',
          transform: condensedHero || !appeared ? 'translateY(-10px)' : 'translateY(50%)',
          opacity: appeared ? 1 : 0,
          bgcolor: 'primaryDark.500',
          '&:hover, &.Mui-focused': {
            bgcolor: 'primaryDark.600'
          }
        }}>
        {condensedHero ? (
          <KeyboardArrowUpRounded fontSize='small' />
        ) : (
          <KeyboardArrowDownRounded fontSize='small' />
        )}
      </IconButton>
      {content}
    </Box>
  )
}
