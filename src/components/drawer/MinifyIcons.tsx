import Box from '@mui/material/Box'
import { saveAs } from 'file-saver'
import * as React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { minifiedTextAtom, minifyDialogOpenAtom, userGeneratedJsonAtom } from '../../recoil'
import { BrandSwatch } from '../../style'
import { SxCircularProgress } from '../action'
import { CheckIcon, CloseIcon, CopyIcon, DownloadIcon } from '../icons'
import { ButtonGroupSx, IconButtonSxStyle, ToolTipSx } from '../mui'

export function MinifyIcons() {
  //set dialog with minified json visability
  const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)

  //retrieve localStorage value
  const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)

  //store minified json in recoil
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)

  // minify json
  React.useEffect(() => {
    async function Minify(text) {
      if (typeof JSON === 'undefined' || null) {
        return text
      } else {
        const results = typeof text === 'string' && JSON.stringify(JSON.parse(text), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(userGeneratedJson)
  }, [userGeneratedJson, setMinifiedText])

  //useRef to avoid re-renders during button interactions
  const interactionTimer = React.useRef<number>()

  //useEffect to handle side effect proceeding button interactions
  React.useEffect(() => {
    return () => {
      //cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  //useState hooks to handle button transitions during copy interaction
  const [minifiedCopy, setMinifiedCopy] = React.useState(false)
  const [loadingCopy, setLoadingCopy] = React.useState(false)
  const [successCopy, setSuccessCopy] = React.useState(false)

  // handle copy of minified json to clipboard
  async function handleMinifyCopy() {
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      await navigator.clipboard.writeText(minifiedText)
      setMinifiedCopy(true)
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 4000)
    }
  }

  //useState hooks to handle button transitions during download interaction
  const [loadingDownload, setLoadingDownload] = React.useState(false)
  const [successDownload, setSuccessDownload] = React.useState(false)

  const handleMinifiedDownload = () => {
    if (!loadingDownload) {
      setSuccessDownload(false)
      setLoadingDownload(true)
      const downloadJson = (text: string) => {
        try {
          const blob = new Blob([text], { type: 'application/json' + ';charset=utf-8' })
          saveAs(blob, 'minifiedJson.json')
        } catch (t) {
          this.emit('error', 'download', 'Downloading not supported on this browser.')
        }
      }
      downloadJson(minifiedText)
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
    <ButtonGroupSx>
      <Box sx={{ position: 'relative', pl: 5 }}>
        <ToolTipSx tooltipTitle={minifiedCopy ? 'Copied' : 'Copy minified json'}>
          <IconButtonSxStyle
            id='copy-minified-to-clipboard'
            data-clipboard-target='#minified-json-data'
            onClick={handleMinifyCopy}>
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
        {loadingCopy && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <ToolTipSx tooltipTitle={minifiedCopy ? 'Downloaded' : 'Download minified json'}>
          <IconButtonSxStyle onClick={handleMinifiedDownload}>
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
        {loadingDownload && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative', pr: 5 }}>
        <ToolTipSx tooltipTitle={'Close'}>
          <IconButtonSxStyle
            onClick={() => {
              setMinifyDialogOpen(false)
            }}>
            <CloseIcon />
          </IconButtonSxStyle>
        </ToolTipSx>
      </Box>
    </ButtonGroupSx>
  )
}
