import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { JsonPlaceholderData, RandomData } from '../../cms'
import { dataCategoryAtom, dataQuantityAtom, dataSourceAtom } from '../../recoil-state'
import { CardSx, SelectSx } from '../mui'

export default function CategorySelector() {
  const [dataCategory, setDataCategory] = useRecoilState(dataCategoryAtom)

  const dataSource = useRecoilValue(dataSourceAtom)

  const resetDataQuantity = useResetRecoilState(dataQuantityAtom)

  const categoryByProvider = dataSource === '3' ? JsonPlaceholderData : RandomData

  const handleChange = (event: SelectChangeEvent) => {
    setDataCategory(event.target.value as string)
    resetDataQuantity()
  }

  return (
    <>
      {dataSource !== '' && (
        <CardSx title='Category'>
          <FormControl fullWidth>
            <SelectSx id='provider-url-selector' value={dataCategory} onChange={handleChange}>
              {categoryByProvider.map(item => (
                <MenuItem key={item.category} value={item.appendix}>
                  {item.category}
                </MenuItem>
              ))}
            </SelectSx>
          </FormControl>
        </CardSx>
      )}
    </>
  )
}
