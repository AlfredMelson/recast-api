import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
// import { useRecoilState } from 'recoil'
// import { screenWidthAtom } from '../../recoil-state/utilities/atom'
import { BrandSwatch } from '../../style'

const SelectStyle = styled(
  (props?: SelectProps) => <Select autoWidth disableUnderline={true} {...props} />,
  { name: 'Select', slot: 'style' }
)(({ theme }) => ({
  ...theme.typography.body2,
  height: 40,
  paddingLeft: theme.spacing(20),
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
      : alpha(BrandSwatch.Light.Grey[200], 0.5),
  boxShadow: theme.shadows[0],
  '&:hover, &.Mui-focused': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(BrandSwatch.Dark.Grey[700], 0.8)
        : alpha(BrandSwatch.Light.Grey[200], 0.8),
    boxShadow: theme.shadows[1]
  }
}))

type SelectSxAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  sx?: React.CSSProperties
  props?: SelectProps
}

export const SelectSx = ({ id, value, onChange, onClick, children, ...props }: SelectSxAlias) => {
  const menuItemHeight = 48
  const menuItemPaddingTop = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: menuItemHeight * 6 + menuItemPaddingTop,
        width: 240
      }
    }
  }

  const [screenWidth, setScreenWidth] = React.useState<number>()
  // mobile width calc for select input subtracting margin(s) and padding(s)
  React.useEffect(() => {
    const handleResize = () => {
      const currentScreenWidth = window.innerWidth
      const xsMarginAndPadding = 110
      const properSize = currentScreenWidth - xsMarginAndPadding
      setScreenWidth(properSize)
      // setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setScreenWidth])

  return (
    <SelectStyle
      sx={{ width: { xs: screenWidth, sm: '240px' } }}
      MenuProps={MenuProps}
      id={id}
      value={value}
      onChange={onChange}
      onClick={onClick}
      {...props}>
      {children}
    </SelectStyle>
  )
}
