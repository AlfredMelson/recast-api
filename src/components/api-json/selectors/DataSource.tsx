import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import { SourceSelector } from '../../../cms'
import { dataSourceAtom } from '../../../recoil'
import { CardSx, SelectSx } from '../../mui/'

export default function DataSourceSelector() {
  const [dataSource, setDataSource] = useRecoilState(dataSourceAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setDataSource(event.target.value as string)
  }

  return (
    // <SelectCards title='Source' sx={{ mt: 10, ml: 20, mb: 0 }}>
    <CardSx title='Source'>
      <FormControl>
        <SelectSx id='provider-selector' value={dataSource} onChange={handleChange}>
          {SourceSelector.map(item => (
            <MenuItem key={item.index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </SelectSx>
      </FormControl>
    </CardSx>
  )
}
