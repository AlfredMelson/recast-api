import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { alpha, styled } from '@mui/material/styles'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { NodeClient } from '../../cms'
import { httpClientAtom } from '../../recoil-state'
import { BrandSwatch } from '../../style'

const HeroClosedViewSplitButton = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: 'HeroClosedView', slot: 'split-button' }
)(({ theme }) => ({
  ...theme.typography.caption,
  textTransform: 'none',
  width: 90,
  height: 36,
  padding: theme.spacing(0, 20),
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  borderRight: ' 1px solid',
  borderColor: theme.palette.divider,
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
        : alpha(BrandSwatch.Light.Grey[300], 0.2)
  }
}))

export const HeroClosedViewDropdown = styled(
  (props: ButtonProps) => <Button size='small' variant='text' {...props} />,
  { name: 'HeroClosedView', slot: 'dropdown' }
)(({ theme }) => ({
  textTransform: 'none',
  ...theme.typography.caption,
  height: 36,
  padding: theme.spacing(0, 20),
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
        : alpha(BrandSwatch.Light.Grey[300], 0.2)
  }
}))

export default function SplitButtonSx() {
  const [httpClient, setHttpClient] = useRecoilState(httpClientAtom)

  const handleMenuItemClick = (client: string) => {
    setHttpClient(client)
    setOpen(false)
  }

  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup variant='contained' ref={anchorRef} aria-label='split button'>
        <HeroClosedViewSplitButton>{httpClient}</HeroClosedViewSplitButton>
        <HeroClosedViewDropdown
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onClick={handleToggle}>
          <ArrowDropDownIcon />
        </HeroClosedViewDropdown>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu'>
                  {NodeClient.map(item => (
                    <MenuItem
                      key={item.client}
                      selected={item.client === httpClient}
                      onClick={() => handleMenuItemClick(item.client)}>
                      {item.client}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
