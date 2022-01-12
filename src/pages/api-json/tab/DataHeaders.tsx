import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
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

type DataHeadersAlias = {
  data?: { [key: string]: any } | undefined
}
export default function DataHeaders({ data }: DataHeadersAlias) {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<DataHeadersAlias['data']>({})

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

function JsonArray({ value, dataKey }: ApiArrayAlias) {
  const renderArrayContent = () => {
    return value.map((v: any, index: number) => {
      const type: string = getType(v)
      return <ApiDataSort key={index} index={index} dataValue={v} dataType={type} dataKey={index} />
    })
  }

  const renderContent = () => {
    return (
      <Stack direction='row' alignItems='flex-start'>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }
  return renderContent()
}

function JsonBoolean({ value, dataKey }: ApiBooleanAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: BrandSwatch.Dark.Green[300] }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonFunction({ dataKey }: ApiFunctionAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>
        {'['}&nbsp;&#402;&nbsp;{']'}
      </span>
    </Typography>
  )
}

function JsonNumber({ value, dataKey }: ApiNumberAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: BrandSwatch.Dark.Green[300] }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonObject({ value, dataKey }: ApiObjectAlias) {
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
          key={index}
          index={index}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
        />
      )
    })
  }
  const renderObjContent = () => {
    return (
      <Typography variant='code'>
        {`${dataKey}: {`}
        <Box sx={{ ml: 30 }}>{renderObject()}</Box>
        {'};'}
      </Typography>
    )
  }
  return renderObjContent()
}

function JsonString({ value, dataKey }: ApiStringAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: BrandSwatch.Dark.Green[300] }}>{`"${value}"`}</span>
    </Typography>
  )
}
