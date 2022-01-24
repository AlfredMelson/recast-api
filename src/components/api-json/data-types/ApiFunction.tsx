import { blue } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ApiFunctionAlias } from './typeAliases'
import { DataTypeLabelSx } from '.'

export function ApiFunction({ dataKey, dataType }: ApiFunctionAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='edit' />
      <Typography variant='code' sx={{ color: blue[400] }}>
        Function()
      </Typography>
    </Stack>
  )
}
