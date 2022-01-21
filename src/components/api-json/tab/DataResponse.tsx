import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import * as React from 'react'
import { ErrorBoundary } from '../../../lib'
import { ArrowDownIcon, ArrowRightIcon } from '../../icons'
import { IconButtonSxDataIcon, PaperSx } from '../../mui'
import { ApiArrayAlias, ApiDataSortAlias, ApiObjectAlias, getType } from '../data-types/typeAliases'
import { TypeBoolean, TypeFunction, TypeNumber, TypeString } from '../primitive-styles'
import { ArrayTypography } from '../primitive-styles/Array.styles'

type DataResponseAlias = {
  data?: { [key: string]: any } | undefined
}
export default function DataResponse({ data }: DataResponseAlias) {
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentData, setCurrentData] = React.useState<DataResponseAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map((key: string, index: number) => {
      return (
        <ApiDataSort
          index={index}
          key={index}
          dataType={currentData && getType(currentData[key])}
          dataValue={currentData && currentData[key]}
          dataKey={key}
        />
      )
    })
  }

  return (
    <PaperSx>
      <ErrorBoundary>{renderData()}</ErrorBoundary>
    </PaperSx>
  )
}

function ApiDataSort({ index, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <JsonArray index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'boolean':
        return <TypeBoolean index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'function':
        return <TypeFunction index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'number':
        return <TypeNumber index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'object':
        return <JsonObject index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'string':
        return <TypeString index={index} key={index} value={dataValue} dataKey={dataKey} />
      default:
        return null
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 4 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      exit='removed'
      custom={index}>
      {renderValue()}
    </motion.div>
  )
}

export function JsonArray({ value, dataKey }: ApiArrayAlias) {
  const [childView, setChildView] = React.useState(true)

  const renderArrayContent = () => {
    return value.map((v: any, index: number) => {
      const type: string = getType(v)
      return <ApiDataSort index={index} key={index} dataValue={v} dataType={type} dataKey={index} />
    })
  }

  const renderContent = () => {
    if (childView) {
      return (
        <Stack direction='row'>
          <IconButtonSxDataIcon
            onClick={() => {
              setChildView(!childView)
            }}>
            <ArrowRightIcon />
          </IconButtonSxDataIcon>
          <ArrayTypography>
            {dataKey}&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
            <span>
              &#47;&#47;&nbsp;
              {childView && value ? Object.keys(value).length : ''}&nbsp;
              {Object.keys(value).length === 1 ? 'item' : 'items'}
            </span>
          </ArrayTypography>
        </Stack>
      )
    }

    return (
      <Stack direction='row' alignItems='flex-start'>
        <IconButtonSxDataIcon
          onClick={() => {
            setChildView(!childView)
          }}>
          <ArrowDownIcon />
        </IconButtonSxDataIcon>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }

  return renderContent()
}

function JsonObject({ value, dataKey }: ApiObjectAlias) {
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
        <ApiDataSort
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
