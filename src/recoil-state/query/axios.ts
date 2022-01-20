import { atom } from 'recoil'

export type axiosResponse = {
  // `data` is the response that was provided by the server
  data: Record<string, unknown> // {}
  // `status` is the HTTP status code from the server response
  status: number // 200
  // `statusText` is the HTTP status message from the server response
  statusText: string // 'OK'
  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: Record<string, unknown> // {}
  // `config` is the config that was provided to `axios` for the request
  config: Record<string, unknown> // {}
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: Record<string, unknown> // {}
}

/**
 * Recoil managed state representing response.data returned from the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosDataAtom = atom({
  key: 'axiosData',
  default: {}
})
// const [axiosData, setAxiosData] = useRecoilState(axiosDataAtom)
// const setAxiosData = useSetRecoilState(axiosDataAtom)
// const axiosData = useRecoilValue(axiosDataAtom)
// const resetAxiosData = useResetRecoilState(axiosDataAtom)

/**
 * Recoil managed state representing response.status contained in the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosStatusAtom = atom<number | null>({
  key: 'axiosStatus',
  default: null
})
// const [axiosStatus, setAxiosStatus] = useRecoilState(axiosStatusAtom)
// const setAxiosStatus = useSetRecoilState(axiosStatusAtom)
// const axiosStatus = useRecoilValue(axiosStatusAtom)
// const resetAxiosStatus = useResetRecoilState(axiosStatusAtom)

/**
 * Recoil managed state representing response.status.text contained in the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosStatusTextAtom = atom<string | null>({
  key: 'axiosStatusText',
  default: null
})
// const [axiosStatusText, setAxiosStatusText] = useRecoilState(axiosStatusTextAtom)
// const setAxiosStatusText = useSetRecoilState(axiosStatusTextAtom)
// const axiosStatusText = useRecoilValue(axiosStatusTextAtom)
// const resetAxiosStatusText = useResetRecoilState(axiosStatusTextAtom)

/**
 * Recoil managed state representing response.headers returned from the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosHeadersAtom = atom({
  key: 'axiosHeaders',
  default: {}
})
// const [axiosHeaders, setAxiosHeaders] = useRecoilState(axiosHeadersAtom)
// const setAxiosHeaders = useSetRecoilState(axiosHeadersAtom)
// const axiosHeaders = useRecoilValue(axiosHeadersAtom)
// const resetAxiosHeaders = useResetRecoilState(axiosHeadersAtom)

/**
 * Recoil managed state representing response.request contained in the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosRequestAtom = atom({
  key: 'axiosRequest',
  default: {}
})
// const [axiosRequest, setAxiosRequest] = useRecoilState(axiosRequestAtom)
// const setAxiosRequest = useSetRecoilState(axiosRequestAtom)
// const axiosRequest = useRecoilValue(axiosRequestAtom)
// const resetAxiosRequest = useResetRecoilState(axiosRequestAtom)

/**
 * Recoil managed state representing response.config returned from the api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosConfigAtom = atom({
  key: 'axiosConfig',
  default: {}
})
// const [axiosConfig, setAxiosConfig] = useRecoilState(axiosConfigAtom)
// const setAxiosConfig = useSetRecoilState(axiosConfigAtom)
// const axiosConfig = useRecoilValue(axiosConfigAtom)
// const resetAxiosConfig = useResetRecoilState(axiosConfigAtom)

/**
 * Recoil managed state representing the full api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const axiosResponseAtom = atom({
  key: 'axiosResponse',
  default: {}
})
// const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
// const setAxiosResponse = useSetRecoilState(axiosResponseAtom)
// const axiosResponse = useRecoilValue(axiosResponseAtom)
// const resetAxiosResponse = useResetRecoilState(axiosResponseAtom)
