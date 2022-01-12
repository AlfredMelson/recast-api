import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiUndefinedAlias } from './typeAliases'

export function ApiUndefined({ value, dataKey, dataType }: ApiUndefinedAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' />
      <Typography variant='code' style={{ color: blue[400] }}>
        &#34;{value}&#34;
      </Typography>
    </Stack>
  )
}
