import { Suspense } from 'react'
import { HeroContent } from '../../components/hero'
import { CircularProgressStyle } from '../../components/mui'
import { ResponseTabs } from '../../components/tabs'
import { ErrorBoundary } from '../../lib'

export default function ApiJson() {
  return (
    <>
      <HeroContent />
      <ErrorBoundary>
        <Suspense fallback={<CircularProgressStyle />}>
          <ResponseTabs />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
