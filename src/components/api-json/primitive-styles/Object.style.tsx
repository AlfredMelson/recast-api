import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { ArrowDownIcon, ArrowRightIcon } from '../../icons'
import { IconButtonSxDataIcon } from '../../mui'
import { ApiObjectAlias, getType } from '../data-types/typeAliases'
import { TypeSort } from '.'

export function TypeObject({ value, dataKey }: ApiObjectAlias) {
  const [childView, setChildView] = React.useState(true)
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentValue, setCurrentValue] = React.useState<ApiObjectAlias['value']>({})
  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])

  const renderObject = () => {
    return keys.map((k: string, index: number) => {
      return (
        <TypeSort
          index={index}
          key={index}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
        />
      )
    })
  }
  const renderObjContent = () => {
    if (childView)
      return (
        <>
          <Stack direction='row' sx={{ ml: -16 }}>
            <IconButtonSxDataIcon
              onClick={() => {
                setChildView(!childView)
              }}>
              <ArrowDownIcon />
            </IconButtonSxDataIcon>
            <Typography variant='code'>{dataKey}</Typography>
          </Stack>
          <Box sx={{ ml: '32px' }}>{renderObject()}</Box>
        </>
      )
    return (
      <Stack direction='row' sx={{ ml: -16 }}>
        <IconButtonSxDataIcon
          onClick={() => {
            setChildView(!childView)
          }}>
          <ArrowRightIcon />
        </IconButtonSxDataIcon>
        <Typography variant='code'>
          {keys.length === 0 ? (
            ''
          ) : (
            <>
              {dataKey}&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
              <Box component='span' sx={{ color: grey[500] }}>
                &#47;&#47;&nbsp;{keys.length}&nbsp;
                {keys.length === 1 ? 'item' : 'items'}
              </Box>
            </>
          )}
        </Typography>
      </Stack>
    )
  }
  return renderObjContent()
}
