import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ErrorBoundary } from '../../lib'
import { currentApiQuerySelector } from '../../recoil-state'
import { PaperSx } from '../mui'
import {
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiDataSortAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
  getType
} from './data-types'
import { DataTypeLabelSx } from './primitive-styles'

export default function TsInterface() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const [keys, setKeys] = useState([])

  const [currentData, setCurrentData] = useState({})

  useEffect(() => {
    const newkeys = Object.getOwnPropertyNames(currentApiQuery)
    setKeys(newkeys)
    setCurrentData(currentApiQuery)
  }, [currentApiQuery])

  const renderData = () => {
    return keys.map((key: string, index: number) => {
      return (
        <ApiDataSort
          key={index}
          index={index}
          dataType={currentData && getType(currentData[key])}
          dataValue={currentData && currentData[key]}
          dataKey={key}
        />
      )
    })
  }

  // state when url is submitted
  // const selectedApi = useRecoilValue(selectedApiSelector)
  // split and pop to isolate interface name
  // const lastSegment = selectedApi.split('/').pop()
  // remove underscore and uppercase following character
  // const formLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1).toUpperCase())
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)

  return (
    <PaperSx>
      <ErrorBoundary>
        <Typography variant='code'>
          {`declare module namespace {`}
          <Box sx={{ ml: 30 }}>{renderData()}</Box>
          {'}'}
        </Typography>
        {/* <DownloadInfo appeared={true} title={`${formLastSegment}Props`} /> */}
        {/* <DownloadInfo
          appeared={true}
          content={
            <>
              <Typography fontWeight='bold' color='grey.300' variant='body2'>
                {`${formLastSegment}Props`}
              </Typography>
              <Typography color='grey.600' variant='body2'>
                * .d.ts
              </Typography>
              <Box sx={{ my: 10, textAlign: 'center' }}>
                <TsInterfaceIcons />
              </Box>
            </>
          }
        /> */}
      </ErrorBoundary>
    </PaperSx>
  )
}

function ApiDataSort({ index, dataKey, dataType, dataValue }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return (
          <JsonArray
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
      case 'boolean':
        return (
          <JsonBoolean
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
      case 'function':
        return (
          <JsonFunction
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
      case 'number':
        return (
          <JsonNumber
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
      case 'object':
        return (
          <JsonObject
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
      case 'string':
        return (
          <JsonString
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
          />
        )
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
      return <ApiDataSort key={index} index={index} dataType={type} dataKey={index} />
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

function JsonBoolean({ dataKey, dataType }: ApiBooleanAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='typescript' />
    </Stack>
  )
}

function JsonFunction({ dataKey, dataType }: ApiFunctionAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='typescript' />
    </Stack>
  )
}

function JsonNumber({ dataKey, dataType }: ApiNumberAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='typescript' />
    </Stack>
  )
}

function JsonObject({ value, dataKey }: ApiObjectAlias) {
  const [keys, setKeys] = useState<string[]>([])
  const [currentValue, setCurrentValue] = useState<ApiObjectAlias['value']>({})
  useEffect(() => {
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
    // {typeof dataKey === }
    // const str: string = dataKey
    // const upperCaseDataKey = str.charAt(0).toUpperCase() + str.slice(1)
    return (
      <Typography variant='code'>
        export interface&nbsp;{dataKey}&nbsp;&#123;
        <Box sx={{ ml: 30 }}>{renderObject()}</Box>
        &#125;
      </Typography>
    )
  }
  return renderObjContent()
}

function JsonString({ dataKey, dataType }: ApiStringAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataTypeLabelSx type={dataType} association='typescript' />
    </Stack>
  )
}
