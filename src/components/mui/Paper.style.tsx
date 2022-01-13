import { SxProps } from '@mui/material'
import Paper, { PaperProps } from '@mui/material/Paper'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { apiTabSelectedAtom } from '../../recoil'
import { BrandSwatch } from '../../style'
import { FadeAnimation } from '../framer-motion'

/**
 * @name PaperSxStyle
 * @description styles API Tab Panel
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return
 */
const PaperSxStyle = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(30, 0, 30, 50),
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
  maxHeight: 'calc(100vh - 539px )',
  overflowX: 'hidden',
  overflowY: 'scroll'
}))

/**
 * @name PaperSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui )
 * @return
 */
type PaperSxAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSx = ({ children, onClick, ...props }: PaperSxAlias) => {
  const apiTabSelected = useRecoilValue(apiTabSelectedAtom)
  return (
    <FadeAnimation layoutId={apiTabSelected}>
      <PaperSxStyle onClick={onClick} {...props}>
        {children}
      </PaperSxStyle>
    </FadeAnimation>
  )
}

/**
 * @name PaperSxTreeviewStyle
 * @description styles Treeview
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return
 */
const PaperSxTreeviewStyle = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(30, 0, 30, 50),
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  maxHeight: '86vh',
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll'
}))

/**
 * @name PaperSxTreeview
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */
type PaperSxTreeviewAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSxTreeview = ({ children, onClick, ...props }: PaperSxTreeviewAlias) => {
  return (
    <PaperSxTreeviewStyle onClick={onClick} {...props}>
      {children}
    </PaperSxTreeviewStyle>
  )
}

// /**
//  * @name PaperSxApiSelectorStyle
//  * @description styles API url selectors
//  * @param {Tabs} mui Tabs
//  * @param {styled} mui styled
//  * @param {theme} MuiBrandingTheme
//  * @return
//  */

// const PaperSxApiSelectorStyle = styled((props: PaperProps) => <Paper {...props} />)(
//   ({ theme }) => ({
//     display: 'flex',
//     height: 50,
//     width: '100%',
//     px: 10,
//     alignItems: 'center',
//     backgroundColor:
//       theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
//     border: '1px solid',
//     borderColor:
//       theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
//     color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
//     transition: theme.transitions.create(['all'], {
//       duration: theme.transitions.duration.standard,
//       easing: theme.transitions.easing.easeInOut,
//     }),
//     '&:hover ': {
//       color:
//         theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
//       backgroundColor:
//         theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
//     },
//     '&.Mui-selected': {
//       color:
//         theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
//       backgroundColor:
//         theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
//     },
//   })
// )

// /**
//  * @name PaperSxApiSelectorWrapper
//  * @description styles
//  * @param {PaperSxApiSelectorStyle}
//  * @param {children} React.ReactNode
//  * @param {paddingLeft} mui
//  * @return
//  *
//  * @MUIPaperAPI https://mui.com/api/paper/
//  */
// type PaperSxApiSelectorWrapperAlias = {
//   children: React.ReactNode
// }

// export const PaperSxApiSelectorWrapper = ({ children }: PaperSxApiSelectorWrapperAlias) => {
//   return <PaperSxApiSelectorStyle>{children}</PaperSxApiSelectorStyle>
// }

/**
 * @name PaperSxDropdownStyle
 * @description styles API url selectors
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled API url selectors
 */

export const PaperSxDropdownStyle = styled((props: PaperProps) => <Paper {...props} />)(
  ({ theme }) => ({
    minWidth: 400,
    overflow: 'hidden',
    borderColor: 'transparent',
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
    boxShadow: `0px 4px 20px ${
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.background.paper, 1)
        : 'rgba(170, 180, 190, 0.3)'
    }`,
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    '& li:not(:last-of-type)': {
      borderBottom: 1,
      borderStyle: 'solid',
      borderColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200]
    }
    // '& a': { textDecoration: 'none' },
    // transition: theme.transitions.create(['all'], {
    //   duration: theme.transitions.duration.standard,
    //   easing: theme.transitions.easing.easeInOut,
    // }),
    // '&:hover ': {
    //   borderWidth: 1,
    //   borderStyle: 'solid',
    //   borderColor:
    //     theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[600] : BrandSwatch.Light.Blue[400],
    // },
  })
)

/**
 * @name PaperSxDropdownWrapper
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui )
 * @return styled API Tab Panel background motion
 */
type PaperSxDropdownWrapperAlias = {
  children: React.ReactNode
}

export const PaperSxDropdownWrapper = ({ children }: PaperSxDropdownWrapperAlias) => {
  return <PaperSxDropdownStyle>{children}</PaperSxDropdownStyle>
}
