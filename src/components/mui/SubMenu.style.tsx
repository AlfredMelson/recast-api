import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { BrandSwatch } from '../../style'

type SubMenuAlias = {
  icon: React.ReactElement
  name: React.ReactNode
  description: React.ReactNode
  href: string
} & Omit<JSX.IntrinsicElements['a'], 'ref'>

export const SubMenu = React.forwardRef<HTMLAnchorElement, SubMenuAlias>(function VisualSubMenu(
  { icon, name, description, href },
  ref
) {
  return (
    <React.Fragment>
      <Link to={href}>
        <Box
          component='div'
          ref={ref}
          sx={{
            py: 20,
            display: 'flex',
            alignItems: 'center',
            bgcolor: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[700]
                : BrandSwatch.Light.Grey[300],
            '&:hover, & .Mui-focused': {
              bgcolor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[600]
                  : BrandSwatch.Light.Grey[400],
              outline: 'none',
              '@media (hover: none)': {
                backgroundColor: 'initial',
                outline: 'initial'
              }
            }
          }}>
          <Box component='div' sx={{ px: 20 }}>
            {icon}
          </Box>
          <Stack direction='column'>
            <Typography color='text.primary' variant='body2' fontWeight={600}>
              {name}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Grey[100]
                    : BrandSwatch.Light.Grey[800],
                fontWeight: theme => theme.palette.mode === 'light' && 600
              }}>
              {description}
            </Typography>
          </Stack>
        </Box>
      </Link>
    </React.Fragment>
  )
})
