import CheckIcon from '@mui/icons-material/Check'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { currentApiStateAtom, selectedApiSelector } from '../../../recoil'
import { BrandSwatch } from '../../../style'
import { SxCircularProgress } from '../../action'
import { ButtonSxStyle, CardSx } from '../../mui'

export default function DataFetch() {
  const resetSelectedApi = useResetRecoilState(selectedApiSelector)

  const [currentApiState, setCurrentApiState] = useRecoilState(currentApiStateAtom)

  // state when user submits user entered url
  const selectedApi = useRecoilValue(selectedApiSelector)

  // state of full response returned from the api call
  // const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
  // console.log('axiosResponse', axiosResponse)

  // return a callback to clear cache
  // const refreshApiQuery = useRecoilRefresher_UNSTABLE(currentApiQuerySelector)

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  // useState hooks to handle submit button transitions
  const [submitting, setSubmitting] = React.useState(false)
  const [successSubmit, setSuccessfulSubmit] = React.useState(false)
  // const [diableUI, setDiableUI] = React.useState(false)

  // handle submission of user typed url
  const handleDataFetching = () => {
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
      }, 1000)
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
    <CardSx title='Controls'>
      <Stack direction='row' justifyContent='center' alignItems='center' spacing={10}>
        <ButtonSxStyle
          aria-label='clear url'
          onClick={event => {
            event.preventDefault()
            resetSelectedApi()
          }}
          disabled={selectedApi.length === 0}>
          <Typography variant='button'>Clear</Typography>
        </ButtonSxStyle>
        <Box sx={{ position: 'relative' }}>
          <ButtonSxStyle
            aria-label='fetch api'
            disabled={selectedApi === undefined}
            onClick={handleDataFetching}>
            {!submitting && !successSubmit ? (
              <Typography variant='button'>
                {currentApiState === null ? 'Fetch' : 'Refetch'}
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

// <Box sx={{ position: 'relative' }}>
//   {selectedApi === undefined ? (
//     <ButtonSxStyle aria-label='disbaled fetch api' disabled={true} onClick={handleDataFetching}>
//       <Typography variant='body2' sx={{ color: theme => theme.palette.text.disabled }}>
//         Enter url ...
//       </Typography>
//     </ButtonSxStyle>
//   ) : (
//     <ButtonSxStyle aria-label='fetch api' disabled={!diableUI} onClick={handleDataFetching}>
//       {!submitting && !successSubmit ? (
//         <Typography variant='button'>
//           {Object.getOwnPropertyNames(axiosResponse).length === 0 ? 'Fetch' : 'Refetch'}
//         </Typography>
//       ) : (
//         successSubmit && <CheckIcon sx={{ color: BrandSwatch.Light.Blue[400] }} />
//       )}
//     </ButtonSxStyle>
//   )}
//   {submitting && <SxCircularProgress size='20px' color='blue' />}
// </Box>
