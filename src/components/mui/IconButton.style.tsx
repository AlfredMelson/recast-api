import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style'

export const IconButtonSxStyle = styled(IconButton, {
  name: 'IconButtonSx',
  slot: 'style'
})(({ theme }) => ({
  // color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
  color: theme.palette.primary.light,
  padding: theme.spacing(10),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.text.primary
  }
}))

export const IconButtonSxApiIcons = styled((props: IconButtonProps) => <IconButton {...props} />, {
  name: '',
  slot: ''
})(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  margin: theme.spacing(0, 5),
  padding: theme.spacing(0),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900]
  }
}))

export const IconButtonSxApiEdit = styled(IconButton, {
  name: '',
  slot: ''
})(({ theme }) => ({
  '.Mui-disabled': {
    color: theme.palette.mode === 'dark' ? '#000000' : theme.palette.grey[900]
  },
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  padding: theme.spacing(5),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover ': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900]
  }
}))

export const IconButtonSxTsInterface = styled(IconButton, {
  name: '',
  slot: ''
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(10),
  backgroundColor: BrandSwatch.Dark.Grey[900],
  transition: theme.transitions.create(['color', 'backgroundColor'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    backgroundColor: BrandSwatch.Dark.Grey[800],
    color: theme.palette.text.primary
  }
}))

export const IconButtonSx = styled(IconButton, {
  name: '',
  slot: ''
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(10),
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.text.primary
  },
  '& > div': {
    cursor: 'default'
  }
}))

export const IconButtonSxDataIcon = styled(IconButton, {
  name: '',
  slot: ''
})(({ theme }) => ({
  padding: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    color: theme.palette.text.primary
  }
}))
