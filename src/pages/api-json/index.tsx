import { Suspense } from 'react'
import { HeroContainter } from '../../components/hero'
import { CircularProgressStyle } from '../../components/mui'
import { ResponseTabs } from '../../components/tabs'
import { ErrorBoundary } from '../../lib'

export default function ApiJson() {
  return (
    <>
      <HeroContainter />
      <ErrorBoundary>
        <Suspense fallback={<CircularProgressStyle />}>
          <ResponseTabs />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
