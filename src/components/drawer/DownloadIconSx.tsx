import Box from '@mui/material/Box'
import saveAs from 'file-saver'
import { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currentApiQuerySelector } from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { CheckIcon, DownloadIcon } from '../icons'
import { CircularProgressStyle, IconButtonSxStyle, ToolTipSx } from '../mui'

export default function DownloadIconSx() {
  // retrieve localStorage value
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  // useRef to avoid re-renders during button interactions
  const interactionTimer = useRef<number>()

  // useEffect to handle side effect proceeding button interactions
  useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  // useState hooks to handle button transitions during download interaction
  const [loadingDownload, setLoadingDownload] = useState(false)
  const [successDownload, setSuccessDownload] = useState(false)

  const handleDownload = () => {
    if (!loadingDownload) {
      setSuccessDownload(false)
      setLoadingDownload(true)
      const downloadJson = (text: string) => {
        try {
          const blob = new Blob([text], { type: 'application/json' + ';charset=utf-8' })
          saveAs(blob, 'recast.json')
        } catch (t) {
          this.emit('error', 'download', 'Downloading not supported on this browser.')
        }
      }
      downloadJson(JSON.stringify(currentApiQuery))
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      // restore state to pre-interation
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {!currentApiQuery ? (
        <IconButtonSxStyle disabled={true}>
          <DownloadIcon />
        </IconButtonSxStyle>
      ) : (
        <ToolTipSx tooltipTitle={'Download json'}>
          <IconButtonSxStyle onClick={handleDownload}>
            {!loadingDownload && !successDownload ? (
              <DownloadIcon />
            ) : !successDownload ? (
              <DownloadIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon
                sx={{
                  color: theme =>
                    theme.palette.mode === 'dark'
                      ? BrandSwatch.Dark.Green[300]
                      : BrandSwatch.Light.Green[500]
                }}
              />
            )}
          </IconButtonSxStyle>
        </ToolTipSx>
      )}
      {loadingDownload && <CircularProgressStyle />}
    </Box>
  )
}
