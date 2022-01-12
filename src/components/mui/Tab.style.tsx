import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * @name TabSxStyle
 * @description styles API Tab
 * @param {Tab} mui Tab
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @alias TabSxAlias
 * @return styled Tab
 */

type TabSxStyleAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSxStyle = styled(
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
  )
)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'none',
  minWidth: 130,
  height: 50,
  minHeight: 50,
  padding: theme.spacing(0, 10),
}))

/**
 * @name TabSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type TabSxAlias = {
  label: string
  index?: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSx = ({ label, disabled, onClick, icon, iconPosition, ...props }: TabSxAlias) => {
  return (
    <motion.div initial={{ x: 0 }} animate={{ x: 20 }}>
      <TabSxStyle
        label={label}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
        iconPosition={iconPosition}
        {...props}
      />
    </motion.div>
  )
}
