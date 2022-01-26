import { Suspense } from 'react'
import { ApiTabs } from '../../components/api-json'
import { Hero } from '../../components/hero/Hero'
import { CircularProgressStyle } from '../../components/mui'
import { ErrorBoundary } from '../../lib'

export default function ApiJson() {
  return (
    <>
      <Hero />
      <ErrorBoundary>
        <Suspense fallback={<CircularProgressStyle />}>
          <ApiTabs />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
