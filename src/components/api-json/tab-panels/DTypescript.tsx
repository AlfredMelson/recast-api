import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { ErrorBoundary } from '../../../lib'
import { currentApiQuerySelector } from '../../../recoil-state'
import { PaperSx } from '../../mui'
import { ApiDataSortAlias, getType } from '../data-types'
import {
  TypeArraySx,
  TypeBooleanSx,
  TypeFunctionSx,
  TypeNumberSx,
  TypeObjectSx,
  TypeStringSx
} from '../primitive-styles'

export default function DTypescript() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const [keys, setKeys] = React.useState([])

  const [currentData, setCurrentData] = React.useState({})

  React.useEffect(() => {
    const newkeys = Object.getOwnPropertyNames(currentApiQuery.data)
    setKeys(newkeys)
    setCurrentData(currentApiQuery.data)
  }, [currentApiQuery])

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

  // state when url is submitted
  // const selectedApi = useRecoilValue(selectedApiSelector)
  // split and pop to isolate d.ts file name
  // const lastSegment = selectedApi.split('/').pop()
  // remove underscore and uppercase following character
  // const cleanLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1))
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)

  return (
    <PaperSx>
      <ErrorBoundary>
        <Typography variant='code'>declare module namespace&nbsp;&#123;</Typography>
        <Box sx={{ ml: 30 }}>{renderData()}</Box>
        <Typography variant='code'>&#125;</Typography>
        {/* <DownloadInfo
          appeared={true}
          content={
            <>
              <Typography fontWeight='bold' color='grey.300' variant='body2'>
                {cleanLastSegment}
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
          <TypeArraySx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      case 'boolean':
        return (
          <TypeBooleanSx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      case 'function':
        return (
          <TypeFunctionSx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      case 'number':
        return (
          <TypeNumberSx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      case 'object':
        return (
          <TypeObjectSx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      case 'string':
        return (
          <TypeStringSx
            index={index}
            key={index}
            dataKey={dataKey}
            dataType={dataType}
            value={dataValue}
            association='typescript'
          />
        )
      default:
        return null
    }
  }
  return <>{renderValue()}</>
}
