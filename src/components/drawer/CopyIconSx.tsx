import { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currentApiQuerySelector } from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { CheckIcon, CopyIcon } from '../icons'
import { CircularProgressStyle, IconButtonSxStyle, ToolTipSx } from '../mui'

export default function CopyIconSx() {
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

  // useState hooks to handle button transitions during copy
  const [jsonCopy, setJsonCopy] = useState(false)
  const [loadingCopy, setLoadingCopy] = useState(false)
  const [successCopy, setSuccessCopy] = useState(false)

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

  return (
    <>
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
      {loadingCopy && <CircularProgressStyle />}
    </>
  )
}
