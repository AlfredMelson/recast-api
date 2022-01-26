import Fade, { FadeProps } from '@mui/material/Fade'
import { useEffect, useState } from 'react'

export default function FadeDelay({ delay, ...props }: { delay: number } & FadeProps) {
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    const time = setTimeout(() => {
      setFadeIn(true)
    }, delay)
    return () => {
      clearTimeout(time)
    }
  }, [delay])
  return <Fade in={fadeIn} timeout={1000} {...props} />
}
