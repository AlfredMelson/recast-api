import { atom } from 'recoil'

/**
 * @name axiosResponseAtom
 * @description state representing the full response returned from Axios api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
 * const setAxiosResponse = useSetRecoilState(axiosResponseAtom)
 * const axiosResponse = useRecoilValue(axiosResponseAtom)
 * const resetAxiosResponse = useResetRecoilState(axiosResponseAtom)
 */
export const axiosResponseAtom = atom({
  key: 'axiosResponse',
  default: {},
})

/**
 * @name axiosConfigAtom
 * @description state representing response.config returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosConfig, setAxiosConfig] = useRecoilState(axiosConfigAtom)
 * const setAxiosConfig = useSetRecoilState(axiosConfigAtom)
 * const axiosConfig = useRecoilValue(axiosConfigAtom)
 * const resetAxiosConfig = useResetRecoilState(axiosConfigAtom)
 */
export const axiosConfigAtom = atom({
  key: 'axiosConfig',
  default: {},
})

/**
 * @name axiosDataAtom
 * @description state representing response.data returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosData, setAxiosData] = useRecoilState(axiosDataAtom)
 * const setAxiosData = useSetRecoilState(axiosDataAtom)
 * const axiosData = useRecoilValue(axiosDataAtom)
 * const resetAxiosData = useResetRecoilState(axiosDataAtom)
 */
export const axiosDataAtom = atom({
  key: 'axiosData',
  default: {},
})

/**
 * @name axiosHeadersAtom
 * @description state representing response.headers returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosHeaders, setAxiosHeaders] = useRecoilState(axiosHeadersAtom)
 * const setAxiosHeaders = useSetRecoilState(axiosHeadersAtom)
 * const axiosHeaders = useRecoilValue(axiosHeadersAtom)
 * const resetAxiosHeaders = useResetRecoilState(axiosHeadersAtom)
 */
export const axiosHeadersAtom = atom({
  key: 'axiosHeaders',
  default: {},
})

/**
 * @name axiosRequestAtom
 * @description state representing response.headers returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosRequest, setAxiosRequest] = useRecoilState(axiosRequestAtom)
 * const setAxiosRequest = useSetRecoilState(axiosRequestAtom)
 * const axiosRequest = useRecoilValue(axiosRequestAtom)
 * const resetAxiosRequest = useResetRecoilState(axiosRequestAtom)
 */
export const axiosRequestAtom = atom({
  key: 'axiosRequest',
  default: {},
})

/**
 * @name axiosStatusAtom
 * @description state representing response.status returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosStatus, setAxiosStatus] = useRecoilState(axiosStatusAtom)
 * const setAxiosStatus = useSetRecoilState(axiosStatusAtom)
 * const axiosStatus = useRecoilValue(axiosStatusAtom)
 * const resetAxiosStatus = useResetRecoilState(axiosStatusAtom)
 */
export const axiosStatusAtom = atom({
  key: 'axiosStatus',
  default: {},
})

/**
 * @name axiosStatusTextAtom
 * @description state representing response.status.text returned from the api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [axiosStatusText, setAxiosStatusText] = useRecoilState(axiosStatusTextAtom)
 * const setAxiosStatusText = useSetRecoilState(axiosStatusTextAtom)
 * const axiosStatusText = useRecoilValue(axiosStatusTextAtom)
 * const resetAxiosStatusText = useResetRecoilState(axiosStatusTextAtom)
 */
export const axiosStatusTextAtom = atom({
  key: 'axiosStatusText',
  default: {},
})
