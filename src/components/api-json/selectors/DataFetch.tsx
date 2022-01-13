import CheckIcon from '@mui/icons-material/Check'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from 'recoil'
import {
  axiosResponseAtom,
  dataSourceAtom,
  dataUrlAtom,
  userQuerySelector,
  userSubmittedUrlAtom
} from '../../../recoil'
import { BrandSwatch } from '../../../style'
import { SxCircularProgress } from '../../action'
import { ButtonSxStyle, CardSx } from '../../mui'

export default function DataFetch() {
  // user entered api url stored in recoil
  // const userTypedUrl = useRecoilValue(userTypedUrlAtom)

  const dataUrl = useRecoilValue(dataUrlAtom)

  // reset textfield value to recoil stored default
  // const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)

  // reset textfield value to recoil stored default
  const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)

  // reset response.data value to recoil stored default
  const resetAxiosResponse = useResetRecoilState(axiosResponseAtom)

  const resetDataSource = useResetRecoilState(dataSourceAtom)

  const resetDataUrl = useResetRecoilState(dataUrlAtom)

  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  // value of data fetch
  const axiosResponse = useRecoilValue(axiosResponseAtom)

  // return a callback to clear cache
  const refresh = useRecoilRefresher_UNSTABLE(userQuerySelector)
  // useState hooks to handle submit button transitions
  const [submitting, setSubmitting] = React.useState(false)
  const [successSubmit, setSuccessfulSubmit] = React.useState(false)
  // handle submission of user typed url
  const handleDataFetching = () => {
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)
        // switch between initial call and refresh
        if (Object.getOwnPropertyNames(axiosResponse).length === 0) {
          setUserSubmittedUrl(dataUrl)
        } else {
          refresh()
        }
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 3000)
      return
    }
  }

  // useEffect to handle side effect proceeding button handler
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  return (
    <CardSx title='Controls'>
      <Stack direction='row' justifyContent='center' alignItems='center' spacing={10}>
        <ButtonSxStyle
          aria-label='clear url'
          onClick={event => {
            event.preventDefault()
            // resetUserTypedUrl()
            resetUserSubmittedUrl()
            resetAxiosResponse()
            resetDataSource()
            resetDataUrl()
          }}
          disabled={dataUrl.length === 0}>
          <Typography variant='button'>Clear</Typography>
        </ButtonSxStyle>
        <Box sx={{ position: 'relative' }}>
          <ButtonSxStyle
            aria-label='fetch api'
            disabled={dataUrl === undefined}
            onClick={handleDataFetching}>
            {!submitting && !successSubmit ? (
              <Typography variant='button'>
                {Object.getOwnPropertyNames(axiosResponse).length === 0 ? (
                  <span>Fetch</span>
                ) : (
                  <span>Refetch</span>
                )}
              </Typography>
            ) : (
              successSubmit && <CheckIcon sx={{ color: BrandSwatch.Light.Blue[400] }} />
            )}
          </ButtonSxStyle>
          {submitting && <SxCircularProgress size='20px' color='blue' />}
        </Box>
      </Stack>
    </CardSx>
  )
}
