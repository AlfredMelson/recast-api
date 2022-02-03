import { AnimatePresence, motion, usePresence } from 'framer-motion'
import { ReactNode, Suspense, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ErrorBoundary } from '../../lib'
import { AxiosResponseAlias, currentApiQuerySelector } from '../../recoil-state'
import { PaperSx } from '../mui'
import { getType } from './data-types'
import { SortByType } from './primitive-styles'

const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

type ListItems = {
  children: ReactNode
}

function ListItem({ children }: ListItems) {
  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: true,
    initial: 'out',
    sx: {
      position: isPresent ? 'static' : 'absolute'
    },
    animate: isPresent ? 'in' : 'out',
    whileTap: 'tapped',
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  }

  return <motion.div {...animations}>{children}</motion.div>
}

export default function DataResponse() {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const data = currentApiQuery?.data

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
        <ListItem key={index}>
          <SortByType
            index={index}
            key={index}
            dataType={currentData && getType(currentData[key])}
            dataValue={currentData && currentData[key]}
            dataKey={key}
          />
        </ListItem>
      )
    })
  }

  return (
    <PaperSx>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <AnimatePresence>{renderData()}</AnimatePresence>
        </ErrorBoundary>
      </Suspense>
    </PaperSx>
  )
}
