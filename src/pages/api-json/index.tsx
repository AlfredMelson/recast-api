import { Suspense } from 'react'
import { ApiTabs } from '../../components/api-json'
import AccordionSx from '../../components/hero/AccordianSx'
import { CircularProgressStyle } from '../../components/mui'
import { ErrorBoundary } from '../../lib'

export default function ApiJson() {
  return (
    <>
      <AccordionSx />
      <ErrorBoundary>
        <Suspense fallback={<CircularProgressStyle />}>
          <ApiTabs />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
