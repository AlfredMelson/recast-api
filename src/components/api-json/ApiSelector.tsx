import Stack from '@mui/material/Stack'
import { DataCategorySelector, DataQuantitySelector, DataSourceSelector } from './selectors'

export function ApiSelector() {
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={20}>
      <DataSourceSelector />
      <DataCategorySelector />
      <DataQuantitySelector />
    </Stack>
  )
}
