import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiFunctionAlias } from './typeAliases'

export function ApiFunction({ dataKey, dataType }: ApiFunctionAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' />
      <Typography variant='code' sx={{ color: blue[400] }}>
        Function()
      </Typography>
    </Stack>
  )
}
