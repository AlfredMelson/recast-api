import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { BrandSwatch } from '../../../style'
import { ApiDeleteIcon, ArrowRightIcon } from '../../icons'
import { IconButtonSxApiIcons } from '../../mui'
import { DataTypeLabelSx } from '../primitive-styles'
import { ApiObjectAlias, getType } from './typeAliases'
import { ApiDataSort } from '.'

export function ApiObject({ value, dataKey, dataType, onDelete }: ApiObjectAlias) {
  const [col, setCol] = useState(true)

  const [keys, setKeys] = useState<string[]>([])

  const [currentValue, setCurrentValue] = useState<ApiObjectAlias['value']>({})

  useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])

  const EditOneProperty = (newValue: any, key: string | number): void => {
    const newObj: { [key: string]: any } | undefined = { ...currentValue }
    newObj[key] = newValue
    setCurrentValue(newObj)
  }
  const DeleteOneProperty = (key: any): void => {
    const newObj: { [key: string]: any } = { ...currentValue }
    // newObj = _.omit(currentValue, key);
    currentValue ? delete newObj[key] : ''
    newObj ? setCurrentValue(newObj) : ''
    newObj ? setKeys(Object.keys(newObj)) : ''
  }

  const renderObject = () => {
    return keys.map((k: string, index: number) => {
      return (
        <ApiDataSort
          index={index}
          key={index}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
          onEdit={EditOneProperty}
          onDelete={DeleteOneProperty}
        />
      )
    })
  }

  function IconToggle() {
    return (
      <IconButtonSxApiIcons
        onClick={() => setCol(!col)}
        sx={{
          transform: col ? 'rotate(90deg)' : 'rotate(0deg)',
          mr: 10
        }}>
        <ArrowRightIcon />
      </IconButtonSxApiIcons>
    )
  }

  const renderObjContent = () => {
    if (col)
      return (
        <>
          <Stack direction='row'>
            <IconToggle />
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <DataTypeLabelSx type={dataType ? dataType : ''} association='edit' />
            <IconButtonSxApiIcons
              onClick={() => {
                onDelete(dataKey)
              }}>
              <ApiDeleteIcon />
            </IconButtonSxApiIcons>
            &nbsp;&#123;
          </Stack>
          <Box sx={{ pl: 30 }}>{renderObject()}</Box>
          <Typography variant='code' sx={{ ml: 84 }}>
            &#125;
          </Typography>
        </>
      )

    return (
      <>
        <Stack direction='row'>
          <IconToggle />
          <Typography variant='code'>
            {keys.length === 0 ? (
              ''
            ) : (
              <>
                &#34;{dataKey}&#34;&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
                <Box
                  component='span'
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[200]
                        : BrandSwatch.Light.Grey[900]
                  }}>
                  &#47;&#47;&nbsp;
                  {keys.length}&nbsp;
                  {keys.length === 1 ? 'item' : 'items'}
                </Box>
              </>
            )}
          </Typography>
        </Stack>
      </>
    )
  }

  return renderObjContent()
}

{
  /* <Stack direction='row'>
          <IconButtonSxApiIcons onClick={toggleObj}>
            <ArrowRightIcon />
          </IconButtonSxApiIcons>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <Stack direction='row'>
            <DataTypeLabelSx type={dataType ? dataType : ''} variant='edit' />
            <Typography variant='body1'>{`{ ${keys.length} }`}</Typography>
          </Stack>
        </Stack> */
}
