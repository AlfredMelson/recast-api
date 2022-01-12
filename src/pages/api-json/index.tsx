import * as React from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { userSubmittedUrlAtom } from '../../recoil/api-json/atom'
import { ApiSelector, ApiTabs } from '../../components/api-json'
import { BrandSwatch } from '../../style'
import { HeroStyle } from '../../components/mui/Hero.style'
import { DataFetch, DataSearchBar } from '../../components/api-json/selectors'
import {
  axiosConfigAtom,
  axiosDataAtom,
  axiosResponseAtom,
  axiosHeadersAtom,
  axiosRequestAtom,
  axiosStatusAtom,
  axiosStatusTextAtom,
} from '../../recoil/api-json/axios'
import { ThemeModeToggle } from '../../components/toggle/ThemeMode'
import { TerminalToggle } from '../../components/toggle/Terminal'

// import ApiFallback from '../../components/action/ApiFallback'
// import Alert from '@mui/material/Alert'
// import Collapse from '@mui/material/Collapse'
// import Snackbar from '@mui/material/Snackbar'

// export async function fetchTest(url) {
//   const response = await axios.get(url)
//   console.log('response', response)
//   return response
// }

export function ApiJson() {
  // const [showError, setShowError] = React.useState(false)
  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)

  // state of full response returned from the api call
  const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
  // state of response.headers returned from the api call
  const setAxiosConfig = useSetRecoilState(axiosConfigAtom)
  // state of response.headers returned from the api call
  const setAxiosData = useSetRecoilState(axiosDataAtom)
  // state of response.headers returned from the api call
  const setAxiosHeaders = useSetRecoilState(axiosHeadersAtom)
  // state of response.headers returned from the api call
  const setAxiosRequest = useSetRecoilState(axiosRequestAtom)
  // state of response.headers returned from the api call
  const setAxiosStatus = useSetRecoilState(axiosStatusAtom)
  // state of response.headers returned from the api call
  const setAxiosStatusText = useSetRecoilState(axiosStatusTextAtom)

  // api request
  React.useEffect(() => {
    // test for url before invoking axiosFetch
    if (userSubmittedUrl !== undefined) {
      async function axiosFetch(url) {
        const response = axios.get(url)
        setAxiosResponse(await response)
        setAxiosConfig((await response).config)
        setAxiosData((await response).data)
        setAxiosHeaders((await response).headers)
        setAxiosRequest((await response).request)
        setAxiosStatus((await response).status)
        setAxiosStatusText((await response).statusText)
      }
      axiosFetch(userSubmittedUrl)
    }
  }, [
    userSubmittedUrl,
    setAxiosHeaders,
    setAxiosResponse,
    setAxiosConfig,
    setAxiosData,
    setAxiosRequest,
    setAxiosStatus,
    setAxiosStatusText,
  ])

  if (axiosResponse) {
    console.log('axiosResponse', axiosResponse)
  }
  // state of query
  // const userQuery = useRecoilValue(userQuerySelector)
  // api request
  // React.useEffect(() => {
  //   // test for url before invoking apiDataFetch
  //   if (userQuery !== undefined) {
  //     function apiDataFetch() {
  //       const response = userQuery
  //       // console.log('RECOIL response', response)
  //       setApiData(response)
  //       // if (response !== undefined) {
  //       //   setApiData(response)
  //       // } else return
  //     }
  //     apiDataFetch()
  //   }
  // }, [setApiData, userQuery])

  //
  // state representing the selected element
  // const setSelectedElement = useSetRecoilState(selectedElementAtom)

  //update current resource
  // const updateDataSource = async URL => {
  //   try {
  //     if (URL) {
  //       const response = await axios.get(URL)
  //       setApiData(response.data)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     setShowError(true)
  //     setTimeout(() => {
  //       setShowError(false)
  //     }, 4000)
  //   }
  // }

  // const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return
  //   }
  //   setShowError(false)
  // }

  // show error message
  // const sendErrorMessage = () => {
  //   if (showError)
  //     return (
  //       <Snackbar
  //         anchorOrigin={{
  //           vertical: 'top',
  //           horizontal: 'center',
  //         }}
  //         open={showError}
  //         autoHideDuration={6000}
  //         onClose={handleClose}>
  //         <Alert
  //           variant='outlined'
  //           elevation={6}
  //           onClose={handleClose}
  //           severity='error'
  //           sx={{ width: '100%', backgroundColor: '#000000' }}>
  //           URL provided is invalid
  //         </Alert>
  //       </Snackbar>
  //     )
  //   return
  // }

  return (
    <Container
      maxWidth='lg'
      // onClick={(): void => {
      //   setSelectedElement(null)
      // }}
    >
      <HeroStyle>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 14 }}>
          <Typography
            variant='body2'
            sx={{
              fontStyle: 'italic',
              color: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[100]
                  : BrandSwatch.Light.Grey[800],
              mb: -10,
            }}>
            Select API from dropdown
          </Typography>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <TerminalToggle />
            <ThemeModeToggle />
          </Stack>
        </Stack>

        <ApiSelector />
        <Typography
          variant='body2'
          sx={{
            fontStyle: 'italic',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[100]
                : BrandSwatch.Light.Grey[800],
            mt: 20,
            mb: 14,
          }}>
          or Enter API
        </Typography>
        <Stack direction='row' spacing={20} justifyContent='space-between' alignItems='flex-start'>
          <DataSearchBar />
          <DataFetch />
        </Stack>
      </HeroStyle>
      {/* <Collapse in={showError}>
            <Box sx={{ mt: 10, mb: 20 }}>
              <Alert
                variant='outlined'
                elevation={6}
                onClose={handleClose}
                severity='error'
                sx={{ width: '100%', backgroundColor: '#000000' }}>
                URL provided is invalid
              </Alert>
            </Box>
          </Collapse> */}

      <ApiTabs />
    </Container>
  )
}
