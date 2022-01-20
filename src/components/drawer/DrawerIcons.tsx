import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import saveAs from 'file-saver'
import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  currentApiQuerySelector,
  dataDrawerOpenAtom,
  minifyDialogOpenAtom
} from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { SxCircularProgress } from '../action'
import {
  CheckIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DeleteOutlineIcon,
  DownloadIcon,
  MinifyIcon
} from '../icons'
import { IconButtonSxStyle, ToolTipSx } from '../mui'

export function DrawerIcons(sx) {
  // retrieve localStorage value
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  // reset localStorage value to recoil stored default
  // const resetCurrentApiQuery = useResetRecoilState(currentApiQuerySelector)

  // set dialog with minified json visability
  const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)

  // useRef to avoid re-renders during button interactions
  const interactionTimer = React.useRef<number>()

  // useEffect to handle side effect proceeding button interactions
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  // useState hooks to handle button transitions during copy
  const [jsonCopy, setJsonCopy] = React.useState(false)
  const [loadingCopy, setLoadingCopy] = React.useState(false)
  const [successCopy, setSuccessCopy] = React.useState(false)

  // handle copy of json to clipboard asynchronously
  async function handleJsonCopy() {
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      await navigator.clipboard.writeText(JSON.stringify(currentApiQuery))
      setJsonCopy(true)
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      // restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 3000)
      return
    }
  }

  // useState hooks to handle button transitions during download interaction
  const [loadingDownload, setLoadingDownload] = React.useState(false)
  const [successDownload, setSuccessDownload] = React.useState(false)

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

  // visability of drawer containing terminal
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <ButtonGroup sx={sx}>
      <Box sx={{ position: 'relative', pl: 5 }}>
        {!currentApiQuery ? (
          <IconButtonSxStyle disabled={true}>
            <CopyIcon />
          </IconButtonSxStyle>
        ) : (
          <ToolTipSx tooltipTitle={jsonCopy ? 'Copied' : 'Copy json'}>
            <IconButtonSxStyle onClick={handleJsonCopy}>
              {!loadingCopy && !successCopy ? (
                <CopyIcon />
              ) : !successCopy ? (
                <CopyIcon sx={{ color: 'transparent' }} />
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
        {loadingCopy && <SxCircularProgress size='20px' color='green' />}
      </Box>
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
        {loadingDownload && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        {!currentApiQuery ? (
          <IconButtonSxStyle disabled={true}>
            <DeleteOutlineIcon />
          </IconButtonSxStyle>
        ) : (
          <ToolTipSx tooltipTitle={'Delete json'}>
            <IconButtonSxStyle
            // onClick={() => {resetCurrentApiQuery()}}
            >
              {!currentApiQuery ? <DeleteIcon /> : <DeleteOutlineIcon />}
            </IconButtonSxStyle>
          </ToolTipSx>
        )}
      </Box>
      <Box sx={{ position: 'relative' }}>
        {!currentApiQuery ? (
          <IconButtonSxStyle disabled={true}>
            <MinifyIcon />
          </IconButtonSxStyle>
        ) : (
          <ToolTipSx tooltipTitle={'Minify json'}>
            <IconButtonSxStyle
              onClick={() => {
                setMinifyDialogOpen(true)
              }}>
              <MinifyIcon />
            </IconButtonSxStyle>
          </ToolTipSx>
        )}
      </Box>
      <Box sx={{ position: 'relative', pr: 5 }}>
        <ToolTipSx tooltipTitle={'Close'}>
          <IconButtonSxStyle
            onClick={() => {
              setDataDrawerOpen(false)
            }}>
            <CloseIcon />
          </IconButtonSxStyle>
        </ToolTipSx>
      </Box>
    </ButtonGroup>
  )
}
