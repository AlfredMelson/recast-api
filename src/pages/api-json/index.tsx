import * as React from 'react'
import { ApiTabs } from '../../components/api-json'
import { Hero } from '../../components/hero/Hero'
import { CircularProgressStyle } from '../../components/mui'
import { ErrorBoundary } from '../../lib'

export default function ApiJson() {
  return (
    <>
      <Hero />
      <ErrorBoundary>
        <React.Suspense fallback={<CircularProgressStyle />}>
          <ApiTabs />
        </React.Suspense>
      </ErrorBoundary>
    </>
  )
}
