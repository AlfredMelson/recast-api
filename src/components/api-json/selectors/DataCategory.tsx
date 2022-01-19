import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData } from '../../../cms'
import { dataCategoryAtom, dataQuantityAtom, dataSourceAtom } from '../../../recoil'
import { CardSx, SelectSx } from '../../mui'

export default function DataCategorySelector() {
  const [dataCategory, setDataCategory] = useRecoilState(dataCategoryAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const resetDataQuantity = useResetRecoilState(dataQuantityAtom)

  const categoryByProvider = dataSource === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  const handleChange = (event: SelectChangeEvent) => {
    setDataCategory(event.target.value as string)
    resetDataQuantity()
  }

  return (
    <Box component='div'>
      {dataSource !== '' && (
        <CardSx title='Category'>
          <FormControl fullWidth>
            <SelectSx id='provider-url-selector' value={dataCategory} onChange={handleChange}>
              {categoryByProvider.map(item => (
                <MenuItem key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectSx>
          </FormControl>
        </CardSx>
      )}
    </Box>
  )
}
