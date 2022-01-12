import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue, grey } from '@mui/material/colors'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { IconButtonSxDataIcon } from '../../../components/mui'
import {
  ApiDataSortAlias,
  getType,
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
} from '../data-types/typeAliases'
import { PaperSx } from '../../../components/mui/Paper.style'
import { BrandSwatch } from '../../../style'
import { ErrorBoundary } from '../../../lib/ErrorBoundary'

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
        return <JsonBoolean index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'function':
        return <JsonFunction index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'number':
        return <JsonNumber index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'object':
        return <JsonObject index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'string':
        return <JsonString index={index} key={index} value={dataValue} dataKey={dataKey} />
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
            <KeyboardArrowRightIcon />
          </IconButtonSxDataIcon>
          <Typography variant='code'>
            <Box>
              {dataKey}&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
              <span style={{ color: grey[500] }}>
                &#47;&#47;&nbsp;
                {childView && value ? Object.keys(value).length : ''}&nbsp;
                {Object.keys(value).length === 1 ? 'item' : 'items'}
              </span>
            </Box>
          </Typography>
        </Stack>
      )
    }

    return (
      <Stack direction='row' alignItems='flex-start'>
        <IconButtonSxDataIcon
          onClick={() => {
            setChildView(!childView)
          }}>
          <KeyboardArrowDownIcon />
        </IconButtonSxDataIcon>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }

  return renderContent()
}

export function JsonBoolean({ value, dataKey }: ApiBooleanAlias) {
  return (
    <Typography variant='code' sx={{ color: blue[400] }}>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <span style={{ color: value ? BrandSwatch.Dark.Green[300] : BrandSwatch.Dark.Red[300] }}>
        {value}
      </span>
    </Typography>
  )
}

export function JsonFunction({ dataKey }: ApiFunctionAlias) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>&#91;&nbsp;&#402;&nbsp;&#93;</span>
    </Typography>
  )
}

function JsonNumber({ value, dataKey }: ApiNumberAlias) {
  return (
    <Typography variant='code'>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <span style={{ color: '#9980FF' }}>{value}</span>
    </Typography>
  )
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
        <React.Fragment>
          <Stack direction='row' sx={{ ml: -16 }}>
            <IconButtonSxDataIcon
              onClick={() => {
                setChildView(!childView)
              }}>
              <KeyboardArrowDownIcon />
            </IconButtonSxDataIcon>
            <Typography variant='code'>{dataKey}</Typography>
          </Stack>
          <Box sx={{ ml: '32px' }}>{renderObject()}</Box>
        </React.Fragment>
      )
    return (
      <Stack direction='row' sx={{ ml: -16 }}>
        <IconButtonSxDataIcon
          onClick={() => {
            setChildView(!childView)
          }}>
          <KeyboardArrowRightIcon />
        </IconButtonSxDataIcon>
        <Typography variant='code'>
          {keys.length === 0 ? (
            ''
          ) : (
            <React.Fragment>
              {dataKey}&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
              <span style={{ color: grey[500] }}>
                &#47;&#47;&nbsp;{keys.length}&nbsp;
                {keys.length === 1 ? 'item' : 'items'}
              </span>
            </React.Fragment>
          )}
        </Typography>
      </Stack>
    )
  }
  return renderObjContent()
}

function JsonString({ value, dataKey }: ApiStringAlias) {
  return (
    <Typography variant='code'>
      &#34;{dataKey}&#34;&#58;&nbsp;
      <span style={{ color: BrandSwatch.Dark.Green[300] }}>&#34;{value}&#34;</span>
    </Typography>
  )
}
