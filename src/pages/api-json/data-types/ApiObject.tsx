import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IconButtonSxApiIcons } from '../../../components/mui'
import { ApiDeleteIcon } from '../../../components/icons'
import { BrandSwatch } from '../../../style'
import ApiDataSort from './ApiDataSort'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { getType, ApiObjectAlias } from './typeAliases'

export function ApiObject({ value, dataKey, dataType, onDelete }: ApiObjectAlias) {
  const [col, setCol] = React.useState(true)

  const [keys, setKeys] = React.useState<string[]>([])

  const [currentValue, setCurrentValue] = React.useState<ApiObjectAlias['value']>({})

  React.useEffect(() => {
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
          mr: 10,
        }}>
        <KeyboardArrowRightIcon />
      </IconButtonSxApiIcons>
    )
  }

  const renderObjContent = () => {
    if (col)
      return (
        <React.Fragment>
          <Stack direction='row'>
            <IconToggle />
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType ? dataType : ''} variant='edit' />
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
        </React.Fragment>
      )

    return (
      <React.Fragment>
        <Stack direction='row'>
          <IconToggle />
          <Typography variant='code'>
            {keys.length === 0 ? (
              ''
            ) : (
              <React.Fragment>
                &#34;{dataKey}&#34;&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
                <Box
                  component='span'
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[200]
                        : BrandSwatch.Light.Grey[900],
                  }}>
                  &#47;&#47;&nbsp;
                  {keys.length}&nbsp;
                  {keys.length === 1 ? 'item' : 'items'}
                </Box>
              </React.Fragment>
            )}
          </Typography>
        </Stack>
      </React.Fragment>
    )
  }

  return renderObjContent()
}

{
  /* <Stack direction='row'>
          <IconButtonSxApiIcons onClick={toggleObj}>
            <KeyboardArrowRightIcon />
          </IconButtonSxApiIcons>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <Stack direction='row'>
            <ApiDataTypeLabel type={dataType ? dataType : ''} variant='edit' />
            <Typography variant='body1'>{`{ ${keys.length} }`}</Typography>
          </Stack>
        </Stack> */
}
