import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'
import { styled } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

/**
 * @name ButtonGroupSxTsInterface
 * @description styles TsInterface ButtonGroup
 * @param {ButtonGroup} mui ButtonGroup
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled ButtonGroup
 */
export const ButtonGroupSxTsInterface = styled(ButtonGroup)(({ theme }) => ({
  '& .MuiButtonGroup-root': {
    background: theme.palette.mode === 'dark' ? blue[900] : theme.palette.grey[100],
  },
}))

/**
 * @name ButtonGroupSx
 * @description styles main ButtonGroup
 * @param {ButtonGroup, ButtonGroupProps} mui ButtonGroup
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled ButtonGroup
 */
export const ButtonGroupSx = styled((props: ButtonGroupProps) => <ButtonGroup {...props} />)(
  ({ theme }) => ({
    '& .MuiButtonGroup-root': {
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    },
  })
)
