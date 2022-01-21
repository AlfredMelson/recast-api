import * as React from 'react'
import { ApiTabs } from '../../components/api-json'
import { ErrorBoundary } from '../../lib'
import { Hero } from './Hero'

export default function ApiJson() {
  return (
    <>
      <Hero />
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ApiTabs />
        </React.Suspense>
      </ErrorBoundary>
    </>
  )
}
