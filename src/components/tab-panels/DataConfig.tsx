import { Suspense, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ErrorBoundary } from '../../lib'
import {
  AxiosResponseAlias,
  currentApiQuerySelector,
  currentJsonDataAtom
} from '../../recoil-state'
import { PaperSx } from '../mui'
import { getType } from './data-types/typeAliases'
import { SortByType } from './primitive-styles'

export default function DataConfig() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)
  console.log('currentApiQuery', currentApiQuery)
  const currentJsonData = useRecoilValue(currentJsonDataAtom)
  console.log('currentJsonData', currentJsonData)

  const data = currentApiQuery?.config

  const [keys, setKeys] = useState<string[]>([])
  const [currentData, setCurrentData] = useState<AxiosResponseAlias>(null)
  useEffect(() => {
    if (!currentApiQuery) {
      return
    } else {
      const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
      setKeys(newkeys)
      setCurrentData(data)
    }
  }, [currentApiQuery, data])

  const renderData = () => {
    return keys.map((key: string, index: number) => {
      return (
        <SortByType
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
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>{renderData()}</ErrorBoundary>
      </Suspense>
    </PaperSx>
  )
}
