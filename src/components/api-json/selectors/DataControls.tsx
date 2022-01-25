import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { currentApiStateAtom, selectedApiSelector } from '../../../recoil-state'
import { BrandSwatch } from '../../../style'
import { CheckIcon } from '../../icons'
import { ButtonStyle, CardSx, CircularProgressStyle } from '../../mui'

export default function DataControls() {
  const resetSelectedApi = useResetRecoilState(selectedApiSelector)

  const [currentApiState, setCurrentApiState] = useRecoilState(currentApiStateAtom)

  // state when user submits user entered url
  const selectedApi = useRecoilValue(selectedApiSelector)

  // state of full response returned from the api call
  // const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
  // console.log('axiosResponse', axiosResponse)

  // return a callback to clear cache
  const resetCurrentApiState = useResetRecoilState(currentApiStateAtom)
  // const refreshApiQuery = useRecoilRefresher_UNSTABLE(currentApiQuerySelector)

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  // useState hooks to handle submit button transitions
  const [submitting, setSubmitting] = React.useState(false)
  const [successSubmit, setSuccessfulSubmit] = React.useState(false)
  // const [diableUI, setDiableUI] = React.useState(false)

  // handle submission of user typed url
  const handleDataControlsing = () => {
    resetCurrentApiState()
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)
      // setDiableUI(true)
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)

        setCurrentApiState(selectedApi)

        // switch between initial call and refresh
        // if (Object.getOwnPropertyNames(currentApiState).length === 0) {
        //   console.log('initial call')
        //   setCurrentApiState(selectedApi)
        // } else {
        //   refreshApiQuery()
        // }
      }, 1250)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 3000)
      // setDiableUI(false)
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
    <Box sx={{ width: '100%' }}>
      <CardSx title='Data Controls'>
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={10}>
          <ButtonStyle
            aria-label='clear url'
            onClick={event => {
              event.preventDefault()
              resetSelectedApi()
              resetCurrentApiState()
            }}
            disabled={selectedApi.length === 0}>
            <Typography variant='button'>Clear</Typography>
          </ButtonStyle>
          <Box sx={{ position: 'relative' }}>
            <ButtonStyle
              aria-label='fetch api'
              disabled={selectedApi === ''}
              onClick={handleDataControlsing}>
              {!submitting && !successSubmit ? (
                <Typography variant='button'>
                  {currentApiState === null ? 'Fetch' : 'Refetch'}
                </Typography>
              ) : (
                successSubmit && (
                  <CheckIcon
                    sx={{
                      color: theme =>
                        theme.palette.mode === 'dark'
                          ? BrandSwatch.Dark.Green[500]
                          : BrandSwatch.Light.Green[500]
                    }}
                  />
                )
              )}
            </ButtonStyle>
            {submitting && <CircularProgressStyle />}
          </Box>
        </Stack>
      </CardSx>
    </Box>
  )
}
