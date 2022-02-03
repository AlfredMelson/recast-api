import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Component, ErrorInfo, ReactNode } from 'react'
import { BrandSwatch } from '../style'

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}

export default function Error({ children }: Props) {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={10}
      sx={{ color: BrandSwatch.Dark.Red[500], my: 20 }}>
      <ErrorOutlineIcon fontSize='medium' />
      <Typography variant='body2'>{children}</Typography>
    </Stack>
  )
}

/**
 * Component wrapper to handle rendering errors within component and its descendants
 *
 * (source: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/)
 *
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <Error>Could not fetch data.</Error>
    }

    return this.props.children
  }
}

/**
 * Generic promise connecting to Suspense & ErrorBoundary
 *
 * - error state is handled in ErrorBoundary
 * - pending state is handled in Suspense
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
