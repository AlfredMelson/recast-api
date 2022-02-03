import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'
import { blue } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const ButtonGroupSxTsInterface = styled(ButtonGroup, { name: '', slot: '' })(
  ({ theme }) => ({
    '& .MuiButtonGroup-root': {
      background: theme.palette.mode === 'dark' ? blue[900] : theme.palette.grey[100]
    }
  })
)

export const ButtonGroupSx = styled((props: ButtonGroupProps) => <ButtonGroup {...props} />, {
  name: '',
  slot: ''
})(() => ({
  '& .MuiButtonGroup-root': {
    bgcolor: ({ palette }) => palette.background.default
  }
}))
