import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ApiSelector, ApiTabs } from '../../components/api-json'
import { DataFetch, DataSearchBar } from '../../components/api-json/selectors'
import { HeroSx } from '../../components/mui'
import { BrandSwatch } from '../../style'

// import Alert from '@mui/material/Alert'
// import Collapse from '@mui/material/Collapse'
// import Snackbar from '@mui/material/Snackbar'

export function ApiJson() {
  // const [showError, setShowError] = React.useState(false)
  // state when user submits user entered url
  // const selectedApi = useRecoilValue(selectedApiSelector)

  // const fetchQuery = useRecoilValue(fetchQuerySelector)
  // console.log('fetchQuery', fetchQuery)

  // // state of full response returned from the api call
  // const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
  // // state of response.headers returned from the api call
  // const setAxiosConfig = useSetRecoilState(axiosConfigAtom)
  // // state of response.headers returned from the api call
  // const setAxiosData = useSetRecoilState(axiosDataAtom)
  // // state of response.headers returned from the api call
  // const setAxiosHeaders = useSetRecoilState(axiosHeadersAtom)
  // // state of response.headers returned from the api call
  // const setAxiosRequest = useSetRecoilState(axiosRequestAtom)
  // // state of response.headers returned from the api call
  // const setAxiosStatus = useSetRecoilState(axiosStatusAtom)
  // // state of response.headers returned from the api call
  // const setAxiosStatusText = useSetRecoilState(axiosStatusTextAtom)

  // // api request
  // React.useEffect(() => {
  //   // test for url before invoking axiosFetch
  //   if (selectedApi !== undefined) {
  //     async function axiosFetch(url) {
  //       const response = axios.get(url)
  //       setAxiosResponse(await response)
  //       setAxiosConfig((await response).config)
  //       setAxiosData((await response).data)
  //       setAxiosHeaders((await response).headers)
  //       setAxiosRequest((await response).request)
  //       setAxiosStatus((await response).status)
  //       setAxiosStatusText((await response).statusText)
  //     }
  //     axiosFetch(selectedApi)
  //   }
  // }, [
  //   selectedApi,
  //   setAxiosHeaders,
  //   setAxiosResponse,
  //   setAxiosConfig,
  //   setAxiosData,
  //   setAxiosRequest,
  //   setAxiosStatus,
  //   setAxiosStatusText
  // ])

  // state of query
  // const fetchQuery = useRecoilValue(fetchQuerySelector)
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
    <Box
    // onClick={(): void => {
    //   setSelectedElement(null)
    // }}
    >
      <HeroSx>
        <Typography
          variant='body2'
          sx={{
            fontStyle: 'italic',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[100]
                : BrandSwatch.Light.Grey[800],
            mb: 8,
            ml: 10
          }}>
          Select API from dropdown
        </Typography>

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
            mb: 8,
            ml: 10
          }}>
          or Enter API
        </Typography>
        <Stack direction='row' spacing={20}>
          <DataSearchBar />
          <DataFetch />
        </Stack>
      </HeroSx>
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
    </Box>
  )
}
