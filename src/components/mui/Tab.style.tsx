import { Box } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import { motion } from 'framer-motion'
import { MouseEventHandler } from 'react'
import { BrandSwatch } from '../../style'

type TabStyleAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  onClick?: MouseEventHandler
}

const TabStyle = styled(
  ({ label, disabled, onClick, icon, ...props }: TabStyleAlias) => (
    <Tab
      label={label}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      icon={icon}
      iconPosition='start'
      {...props}
    />
  ),
  { name: 'Tab', slot: 'style' }
)(({ theme }) => ({
  minHeight: 50,
  margin: theme.spacing(0, 6, -2, 0),
  minWidth: 140,
  padding: theme.spacing(0, 20, 3),
  ...theme.typography.body2,
  textTransform: 'none',
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
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
  },
  '&.Mui-selected': {
    transform: 'translateY(-1px)',
    cursor: 'default',
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
    boxShadow: theme.shadows[1]
  },
  '&.Mui-disabled': {
    cursor: 'default',
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[0]
  },
  '.MuiTab-iconWrapper': {
    marginRight: theme.spacing(14)
  }
}))

type TabSxAlias = {
  label: string
  index?: string
  icon?: JSX.Element
  onClick?: MouseEventHandler
}

export default function TabSx({ label, index, onClick, icon, ...props }: TabSxAlias) {
  return (
    <motion.div initial={{ x: 0 }} animate={{ x: 20 }}>
      <Box sx={{ transform: 'translateY(1px)' }}>
        <TabStyle label={label} disabled={index === '0'} onClick={onClick} icon={icon} {...props} />
      </Box>
    </motion.div>
  )
}
