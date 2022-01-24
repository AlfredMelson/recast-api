import { blue } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ApiUndefinedAlias } from './typeAliases'
import { DataTypeLabelSx } from '.'

export function ApiUndefined({ value, dataKey, dataType }: ApiUndefinedAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='edit' />
      <Typography variant='code' style={{ color: blue[400] }}>
        &#34;{value}&#34;
      </Typography>
    </Stack>
  )
}
