import Box from '@mui/material/Box'
import saveAs from 'file-saver'
import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { userGeneratedJsonAtom } from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { SxCircularProgress } from '../action/SxCircularProgress'
import { CheckIcon, CopyIcon, DownloadIcon } from '../icons'
import { ButtonGroupSxTsInterface } from '../mui/ButtonGroup.style'
import { IconButtonSxTsInterface } from '../mui/IconButton.style'
import { ToolTipSx } from '../mui/ToolTip.style'

export function TsInterfaceIcons() {
  // retrieve localStorage value
  const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)
  //
  // reset localStorage value to recoil stored default
  // const resetUserGeneratedJson = useResetRecoilState(userGeneratedJsonAtom)
  //
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
  // handle copy of json to clipboard
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
      }, 4000)
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
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      //restore state to pre-interation
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  return (
    <ButtonGroupSxTsInterface>
      <Box sx={{ position: 'relative', pr: 5 }}>
        <ToolTipSx tooltipTitle={jsonCopy ? 'Copied' : 'Copy interface'}>
          <IconButtonSxTsInterface onClick={handleJsonCopy}>
            {!loadingCopy && !successCopy ? (
              <CopyIcon />
            ) : !successCopy ? (
              <CopyIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon
                sx={{
                  color: theme =>
                    theme.palette.mode === 'dark'
                      ? BrandSwatch.Dark.Green[600]
                      : BrandSwatch.Light.Green[300]
                }}
              />
            )}
          </IconButtonSxTsInterface>
        </ToolTipSx>
        {loadingCopy && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative', pl: 5 }}>
        <ToolTipSx tooltipTitle={'Download interface'}>
          <IconButtonSxTsInterface onClick={handleDownload}>
            {!loadingDownload && !successDownload ? (
              <DownloadIcon />
            ) : !successDownload ? (
              <DownloadIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon
                sx={{
                  color: theme =>
                    theme.palette.mode === 'dark'
                      ? BrandSwatch.Dark.Green[600]
                      : BrandSwatch.Light.Green[300]
                }}
              />
            )}
          </IconButtonSxTsInterface>
        </ToolTipSx>
        {loadingDownload && <SxCircularProgress size='20px' color='green' />}
      </Box>
    </ButtonGroupSxTsInterface>
  )
}
