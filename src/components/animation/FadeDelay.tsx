import Fade, { FadeProps } from '@mui/material/Fade'
import * as React from 'react'

export default function FadeDelay({ delay, ...props }: { delay: number } & FadeProps) {
  const [fadeIn, setFadeIn] = React.useState(false)
  React.useEffect(() => {
    const time = setTimeout(() => {
      setFadeIn(true)
    }, delay)
    return () => {
      clearTimeout(time)
    }
  }, [delay])
  return <Fade in={fadeIn} timeout={1000} {...props} />
}
