import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import {
  getType,
  ApiDataSortAlias,
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
} from '../data-types/typeAliases'
import { userSubmittedUrlAtom } from '../../../recoil'
import ApiDataTypeLabel from '../data-types/ApiDataTypeLabel'
import { PaperSx } from '../../../components/mui'
import { DownloadInfo, TsInterfaceIcons } from '../../../components/api-json'
import { ErrorBoundary } from '../../../lib/ErrorBoundary'

type DTypescriptAlias = {
  data?: { [key: string]: any } | undefined
}
const DTypescript: React.FC<DTypescriptAlias> = ({ data }: DTypescriptAlias) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<DTypescriptAlias['data']>({})

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

  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // split and pop to isolate d.ts file name
  const lastSegment = userSubmittedUrl.split('/').pop()
  // remove underscore and uppercase following character
  const cleanLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1))
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)

  return (
    <PaperSx>
      <ErrorBoundary>
        <Typography variant='code'>
          declare module namespace&nbsp;&#123;
          <Box sx={{ ml: 30 }}>{renderData()}</Box>
          &#125;
        </Typography>
        <DownloadInfo
          appeared={true}
          content={
            <React.Fragment>
              <Typography fontWeight='bold' color='grey.300' variant='body2'>
                {cleanLastSegment}
              </Typography>
              <Typography color='grey.600' variant='body2'>
                * .d.ts
              </Typography>
              <Box sx={{ my: 10, textAlign: 'center' }}>
                <TsInterfaceIcons />
              </Box>
            </React.Fragment>
          }
        />
      </ErrorBoundary>
    </PaperSx>
  )
}

export default DTypescript

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
      return <ApiDataSort index={index} key={index} dataType={type} dataKey={index} />
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
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}

function JsonFunction({ dataKey, dataType }: ApiFunctionAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}

function JsonNumber({ dataKey, dataType }: ApiNumberAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
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
    return (
      <Typography variant='code'>
        {dataKey}&#58;&nbsp;&#123;
        <Box sx={{ ml: 30 }}>{renderObject()}</Box>
        &#125;&#59;
      </Typography>
    )
  }
  return renderObjContent()
}

function JsonString({ dataKey, dataType }: ApiStringAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}
