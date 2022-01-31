import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import { SourceSelection } from '../../cms'
import { dataSourceAtom } from '../../recoil-state'
import { CardSx, SelectSx } from '../mui'

export default function SourceSelector() {
  const [dataSource, setDataSource] = useRecoilState(dataSourceAtom)

  const handleChange = (event: SelectChangeEvent<string>) => {
    setDataSource(event.target.value)
  }

  return (
    <CardSx title='Source'>
      <FormControl fullWidth>
        <SelectSx id='provider-selector' value={dataSource} onChange={handleChange}>
          {SourceSelection.map(item => (
            <MenuItem key={item.source} value={item.value}>
              {item.source}
            </MenuItem>
          ))}
        </SelectSx>
      </FormControl>
    </CardSx>
  )
}
