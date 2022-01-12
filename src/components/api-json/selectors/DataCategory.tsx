import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState, useRecoilValue } from 'recoil'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { JsonPlaceholderData, RandomData } from '../../../cms'
import { SelectSx, ApiUIWrapper } from '../../mui'
import { dataSourceAtom, dataCategoryAtom } from '../../../recoil'

export default function DataCategorySelector() {
  const [dataCategory, setDataCategory] = useRecoilState(dataCategoryAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const categoryByProvider = dataSource === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  const handleChange = (event: SelectChangeEvent) => {
    setDataCategory(event.target.value as string)
  }

  return (
    <Box component='div'>
      {dataSource !== '' && (
        <ApiUIWrapper title='Data' sx={{ mt: 10, ml: 20, mb: 0 }}>
          <FormControl>
            <SelectSx id='provider-url-selector' value={dataCategory} onChange={handleChange}>
              {categoryByProvider.map(item => (
                <MenuItem key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectSx>
          </FormControl>
        </ApiUIWrapper>
      )}
    </Box>
  )
}
