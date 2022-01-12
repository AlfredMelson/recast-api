import * as React from 'react'
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { ButtonSxStyle, ApiUIWrapper } from '../../mui'
import { SxCircularProgress } from '../../action'
import { BrandSwatch } from '../../../style'
import {
  userSubmittedUrlAtom,
  userTypedUrlAtom,
  userQuerySelector,
  axiosResponseAtom,
  selectedApiAtom,
  selectedApiProviderAtom,
} from '../../../recoil'

export default function DataFetch() {
  // user entered api url stored in recoil
  const userTypedUrl = useRecoilValue(userTypedUrlAtom)

  // reset textfield value to recoil stored default
  const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)

  // reset textfield value to recoil stored default
  const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)

  // reset response.data value to recoil stored default
  const resetAxiosResponse = useResetRecoilState(axiosResponseAtom)

  // reset full response value to recoil stored default
  const resetApiFullResponse = useResetRecoilState(axiosResponseAtom)

  const resetApiProvider = useResetRecoilState(selectedApiProviderAtom)

  const resetSelectedApi = useResetRecoilState(selectedApiAtom)

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
          setUserSubmittedUrl(userTypedUrl)
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
    <ApiUIWrapper title='Controls' sx={{ mt: 10, ml: 20, mb: 0 }}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={20}
        sx={{ m: 10 }}>
        <ButtonSxStyle
          aria-label='clear url'
          onClick={event => {
            event.preventDefault()
            resetUserTypedUrl()
            resetUserSubmittedUrl()
            resetAxiosResponse()
            resetApiFullResponse()
            resetApiProvider()
            resetSelectedApi()
          }}
          disabled={userTypedUrl.length === 0}>
          <Typography variant='button'>Clear</Typography>
        </ButtonSxStyle>
        <Box sx={{ position: 'relative' }}>
          <ButtonSxStyle
            aria-label='fetch api'
            disabled={userTypedUrl === undefined}
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
    </ApiUIWrapper>
  )
}
