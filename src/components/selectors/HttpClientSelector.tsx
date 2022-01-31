import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { NodeClient } from '../../cms'
import { httpClientAtom } from '../../recoil-state'
import { CardSx, FormControlLabelSx } from '../mui'

export default function HttpClientSelector() {
  const [httpClient, setHttpClient] = useRecoilState(httpClientAtom)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHttpClient((event.target as HTMLInputElement).value)
  }

  return (
    <CardSx title='Http Client'>
      <FormControl fullWidth>
        <RadioGroup
          row
          id='provider-url-selector'
          aria-label='api request volume'
          name='api request volume'
          value={httpClient}
          onChange={handleChange}
          sx={{ pr: 0, pl: 10, justifyContent: 'space-around' }}>
          {NodeClient.map(item => (
            <FormControlLabelSx
              key={item.client}
              value={item.client}
              control={<Radio />}
              label={item.client}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </CardSx>
  )
}
