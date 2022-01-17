import * as React from 'react'

interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean
}

/**
 * Component wrapper to handle rendering errors within component and its descendants
 *
 * (source: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/)
 *
 */
export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h6 style={{ color: 'orange' }}>Sorry.. there was an error</h6>
    }

    return this.props.children
  }
}

/**
 * Generic promise connecting to Suspense & ErrorBoundary
 *
 * - error state is handled in ErrorBoundary
 * - pending state is handled in React.Suspense
 * - success state is handled in renderData()
 *
 * Returns an object with a read function that relays different states to Suspense & ErrorBoundary in order for the fallback and error to take effect.
 */
export function handleSuspense(givenPromise) {
  let status = 'pending'

  let result

  const principal = givenPromise.then(
    onFulfillment => {
      status = 'success'
      result = onFulfillment
    },

    onRejection => {
      status = 'error'
      result = onRejection
    }
  )

  return {
    read() {
      if (status === 'pending') {
        console.log('pending')
        throw principal
      } else if (status === 'error') {
        console.log('error')
        throw result
      } else if (status === 'success') {
        console.log('success')
        return result
      }
    }
  }
}
