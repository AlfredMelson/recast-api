import * as React from 'react'
import { ApiTabs } from '../../components/api-json'
import { CircularProgressStyle } from '../../components/mui'
import { ErrorBoundary } from '../../lib'
import { Hero } from './Hero'

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
