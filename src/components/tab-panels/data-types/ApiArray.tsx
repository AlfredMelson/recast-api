import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '../../icons'
import { IconButtonSx } from '../../mui'
import { DataTypeLabelSx } from '../primitive-styles'
import { ApiArrayAlias, getType } from './typeAliases'
import { ApiDataSort } from '.'

export function ApiArray({ value, dataKey, dataType }: ApiArrayAlias) {
  const [col, setCol] = useState(false)

  const [currentValue, setCurrentValue] = useState<ApiArrayAlias['value']>([])

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const editOneFromArray = (newValue: any, key: number | string): void => {
    const temp_state = [...currentValue]
    if (typeof key === 'number') temp_state[key] = newValue
    setCurrentValue(temp_state)
  }

  const deleteOneFromArray = (key: number | string): void => {
    const tempArray = [...currentValue]
    if (typeof key === 'number') tempArray.splice(key, 1)
    setCurrentValue(tempArray)
  }

  const renderArrayContent = () => {
    return currentValue.map((v: any, index: number) => {
      const type: string = getType(v)
      return (
        <ApiDataSort
          index={index}
          key={index}
          dataKey={index}
          dataValue={v}
          dataType={type}
          onEdit={editOneFromArray}
          onDelete={deleteOneFromArray}
        />
      )
    })
  }

  const renderContent = () => {
    if (col) {
      return (
        <Stack direction='row'>
          <IconButtonSx onClick={toggleArray}>
            <ArrowUpIcon />
          </IconButtonSx>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <DataTypeLabelSx type={dataType} association='edit' />
          <Typography variant='code' sx={{ color: theme => theme.palette.text.primary }}>
            &#91;&nbsp;{currentValue.length}&nbsp;&#93;
          </Typography>
        </Stack>
      )
    }
    return (
      <Stack direction='row'>
        <IconButtonSx onClick={toggleArray}>
          <ArrowDownIcon />
        </IconButtonSx>
        <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
        <DataTypeLabelSx type={dataType} association='edit' />
        <Stack direction='row'>
          <Typography variant='code' sx={{ color: theme => theme.palette.text.primary }}>
            &#91;
          </Typography>
          {renderArrayContent()}
          <Typography variant='code' sx={{ color: theme => theme.palette.text.primary }}>
            &#93;
          </Typography>
        </Stack>
      </Stack>
    )
  }

  const toggleArray = () => {
    setCol(!col)
  }

  return renderContent()
}
