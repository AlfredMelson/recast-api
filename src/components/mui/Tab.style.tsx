import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import { motion } from 'framer-motion'
import * as React from 'react'

type TabSxStyleAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

const TabSxStyle = styled(
  ({ label, disabled, onClick, icon, iconPosition, ...props }: TabSxStyleAlias) => (
    <Tab
      label={label}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      icon={icon}
      iconPosition={iconPosition}
      {...props}
    />
  ),
  { name: 'Tab', slot: 'style' }
)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'none',
  minWidth: 140,
  padding: theme.spacing(0, 20),
  height: 50,
  minHeight: 50
}))

type TabSxAlias = {
  label: string
  index?: string
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSx = ({ label, index, onClick, icon, iconPosition, ...props }: TabSxAlias) => {
  return (
    <motion.div initial={{ x: 0 }} animate={{ x: 20 }}>
      <TabSxStyle
        sx={{ boxShadow: 2, fontWeight: index === '0' && 800 }}
        label={label}
        disabled={index === '0'}
        onClick={onClick}
        icon={icon}
        iconPosition={iconPosition}
        {...props}
      />
    </motion.div>
  )
}
