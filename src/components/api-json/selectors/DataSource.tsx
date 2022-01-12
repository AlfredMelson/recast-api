import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import FormControl from '@mui/material/FormControl'
import { SourceSelector } from '../../../cms'
import { SelectSx, ApiUIWrapper } from '../../mui/'
import { dataSourceAtom } from '../../../recoil'

export default function DataSourceSelector() {
  const [dataSource, setDataSource] = useRecoilState(dataSourceAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setDataSource(event.target.value as string)
  }

  return (
    <ApiUIWrapper title='Source' sx={{ mt: 10, ml: 20, mb: 0 }}>
      <FormControl>
        <SelectSx id='provider-selector' value={dataSource} onChange={handleChange}>
          {SourceSelector.map(item => (
            <MenuItem key={item.index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </SelectSx>
      </FormControl>
    </ApiUIWrapper>
  )
}
