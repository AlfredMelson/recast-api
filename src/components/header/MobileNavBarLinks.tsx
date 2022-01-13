import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { SvgHamburgerMenu } from '../icons'

const Anchor = styled('a')<{ component?: React.ElementType; noLinkStyle?: boolean }>(
  ({ theme }) => ({
    ...theme.typography.body2,
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.secondary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(10),
    transition: theme.transitions.create('background'),
    '&:hover, & .Mui-focused': {
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  })
)

const UList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0
})

type ProductAlias = {
  index: number
  title: string
  description: string
  href: string
}

const PRODUCTS: ProductAlias[] = [
  {
    index: 0,
    title: 'Treeview',
    description: 'Expand and collapse the JSON tree.',
    href: '/tree-view'
  },
  {
    index: 1,
    title: 'Api Json',
    description: 'Expand and collapse the JSON tree.',
    href: '/api-json'
  }
]

export function MobileNavBarLinks() {
  const [open, setOpen] = React.useState(false)
  const [productsOpen, setProductsOpen] = React.useState(true)
  const svgMenuRef = React.useRef<HTMLButtonElement | null>(null)
  return (
    <React.Fragment>
      <IconButton
        aria-label='Menu'
        ref={svgMenuRef}
        disableRipple
        onClick={() => setOpen(value => !value)}
        sx={{
          position: 'relative',
          bgcolor: 'none',
          '& svg': { width: 20, height: 20 },
          '&:hover': { background: 'none' },
          '& rect': {
            transformOrigin: 'center',
            transition: '0.2s'
          },
          ...(open && {
            '& rect:first-of-type': {
              transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)'
            },
            '& rect:last-of-type': {
              transform: 'translate(1.5px, -1.2px) rotateZ(45deg)'
            }
          })
        }}>
        <SvgHamburgerMenu />
      </IconButton>
      <ClickAwayListener
        onClickAway={event => {
          if (svgMenuRef.current && !svgMenuRef.current.contains(event.target as Node)) {
            setOpen(false)
          }
        }}>
        <Collapse
          in={open}
          sx={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            boxShadow: '0 15px 10px -5px rgb(90 105 120 / 10%)',
            bgcolor: 'background.paper'
          }}>
          <Box
            sx={{
              p: 2.5,
              bgcolor: 'background.paper',
              maxHeight: 'calc(100vh - 56px)',
              overflow: 'auto'
            }}>
            <UList>
              <li>
                <Anchor
                  as='button'
                  onClick={() => setProductsOpen(bool => !bool)}
                  sx={{ justifyContent: 'space-between' }}>
                  Products
                  <KeyboardArrowDownRounded
                    color='primary'
                    sx={{
                      transition: '0.3s',
                      transform: productsOpen ? 'rotate(-180deg)' : 'rotate(0)'
                    }}
                  />
                </Anchor>
                <Collapse in={productsOpen}>
                  <UList
                    sx={{
                      borderLeft: '1px solid',
                      borderColor: theme =>
                        theme.palette.mode === 'dark' ? 'grey.700' : 'grey.100',
                      pl: 10,
                      pb: 10,
                      ml: 10
                    }}>
                    {PRODUCTS.map(item => (
                      <li key={item.index}>
                        <Anchor
                          // href={item.href}
                          // as={Link}
                          // noLinkStyle
                          sx={{ flexDirection: 'column', alignItems: 'initial' }}>
                          <div>{item.title}</div>
                          <Typography variant='body2' color='text.secondary'>
                            {item.description}
                          </Typography>
                        </Anchor>
                      </li>
                    ))}
                  </UList>
                </Collapse>
              </li>
              <li>
                <Anchor>Instructions</Anchor>
              </li>
              <li>
                <Anchor>Pricing</Anchor>
              </li>
              <li>
                <Anchor>About us</Anchor>
              </li>
            </UList>
            <Button>Light Mode</Button>
          </Box>
        </Collapse>
      </ClickAwayListener>
    </React.Fragment>
  )
}
