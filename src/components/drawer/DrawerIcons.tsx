import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DownloadIcon from '@mui/icons-material/Download'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import Box from '@mui/material/Box'
import saveAs from 'file-saver'
import * as React from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom, minifyDialogOpenAtom, userGeneratedJsonAtom } from '../../recoil'
import { BrandSwatch } from '../../style'
import { SxCircularProgress } from '../action'
import { ButtonGroupSx, IconButtonSxAppBar, ToolTipSx } from '../mui'

export function DrawerIcons() {
  // retrieve localStorage value
  const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)

  // reset localStorage value to recoil stored default
  const resetUserGeneratedJson = useResetRecoilState(userGeneratedJsonAtom)

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
      await navigator.clipboard.writeText(userGeneratedJson)
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
      downloadJson(userGeneratedJson)
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
    <ButtonGroupSx>
      <Box sx={{ position: 'relative', pl: 5 }}>
        {userGeneratedJson.length === 0 ? (
          <IconButtonSxAppBar disabled={true}>
            <ContentCopyIcon />
          </IconButtonSxAppBar>
        ) : (
          <ToolTipSx tooltipTitle={jsonCopy ? 'Copied' : 'Copy json'}>
            <IconButtonSxAppBar onClick={handleJsonCopy}>
              {!loadingCopy && !successCopy ? (
                <ContentCopyIcon />
              ) : !successCopy ? (
                <ContentCopyIcon sx={{ color: 'transparent' }} />
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
            </IconButtonSxAppBar>
          </ToolTipSx>
        )}
        {loadingCopy && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        {userGeneratedJson.length === 0 ? (
          <IconButtonSxAppBar disabled={true}>
            <DownloadIcon />
          </IconButtonSxAppBar>
        ) : (
          <ToolTipSx tooltipTitle={'Download json'}>
            <IconButtonSxAppBar onClick={handleDownload}>
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
            </IconButtonSxAppBar>
          </ToolTipSx>
        )}
        {loadingDownload && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        {userGeneratedJson.length === 0 ? (
          <IconButtonSxAppBar disabled={true}>
            <DeleteOutlineIcon />
          </IconButtonSxAppBar>
        ) : (
          <ToolTipSx tooltipTitle={'Delete json'}>
            <IconButtonSxAppBar
              onClick={() => {
                resetUserGeneratedJson()
              }}>
              {userGeneratedJson.length > 0 ? <DeleteIcon /> : <DeleteOutlineIcon />}
            </IconButtonSxAppBar>
          </ToolTipSx>
        )}
      </Box>
      <Box sx={{ position: 'relative' }}>
        {userGeneratedJson.length === 0 ? (
          <IconButtonSxAppBar disabled={true}>
            <UnfoldLessIcon />
          </IconButtonSxAppBar>
        ) : (
          <ToolTipSx tooltipTitle={'Minify json'}>
            <IconButtonSxAppBar
              onClick={() => {
                setMinifyDialogOpen(true)
              }}>
              <UnfoldLessIcon />
            </IconButtonSxAppBar>
          </ToolTipSx>
        )}
      </Box>
      <Box sx={{ position: 'relative', pr: 5 }}>
        <ToolTipSx tooltipTitle={'Close'}>
          <IconButtonSxAppBar
            onClick={() => {
              setDataDrawerOpen(false)
            }}>
            <CloseIcon />
          </IconButtonSxAppBar>
        </ToolTipSx>
      </Box>
    </ButtonGroupSx>
  )
}
