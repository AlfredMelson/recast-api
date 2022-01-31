import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { ChangeEvent } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { VolumeSelector } from '../../cms'
import { dataCategoryAtom, dataQuantityAtom, dataSourceAtom } from '../../recoil-state'
import { CardSx, FormControlLabelSx } from '../mui'

export default function QuantitySelector() {
  const dataSource = useRecoilValue(dataSourceAtom)

  const dataCategory = useRecoilValue(dataCategoryAtom)

  const [dataQuantity, setDataQuantity] = useRecoilState(dataQuantityAtom)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDataQuantity((event.target as HTMLInputElement).value)
  }

  return (
    <>
      {dataSource === '3' && dataCategory !== '' && (
        <CardSx title='Quantity'>
          <FormControl fullWidth>
            <RadioGroup
              row
              id='provider-url-selector'
              aria-label='api request volume'
              name='api request volume'
              value={dataQuantity}
              onChange={handleChange}
              sx={{ pr: 0, pl: 10 }}>
              {VolumeSelector.map(item => (
                <FormControlLabelSx
                  key={item.index}
                  value={item.value}
                  control={<Radio />}
                  label={item.quantity}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardSx>
      )}
    </>
  )
}
