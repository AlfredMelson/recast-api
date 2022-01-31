import axios from 'axios'
import { atom, selector, selectorFamily } from 'recoil'

/**
 * Recast Data-Flow Graph
 *
 * Query is modeled as selectors in order to build a data-flow graph mixing state, derived state, and queries.
 *
 * The graph will automatically update and re-render React components as state is updated.
 */

/**
 * Recoil managed state representing the current selected api
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const currentApiStateAtom = atom<string | null>({
  key: 'currentApiState',
  default: null
})
// const [currentApiState, setCurrentApiState] = useRecoilState(currentApiStateAtom)
// const setCurrentApiState  = useSetRecoilState(currentApiStateAtom)
// const currentApiState  = useRecoilValue(currentApiStateAtom)
// const resetCurrentApiState = useResetRecoilState(currentApiStateAtom)

/**
 * Recoil managed state selector representing...
 *
 * Return a Promise or use an async function to query the database.
 *
 * If any dependencies change, the selector will be re-evaluated and execute a new query.
 *
 * The results are cached, so the query will only execute once per unique input.
 *
 * Utilise useRecoilValue hook to notify components subscribing to re-render.
 *
 */
export const apiQuerySelector = selectorFamily({
  key: 'apiQuery',
  get: url => async () => {
    const response = await fetchAxios(url)
    //
    // Property 'error' does not exist on type 'AxiosResponse<any, any>'
    // if (response.error) {
    //   throw response.error
    // }
    //

    return response
  }
})
// const apiQuery = useRecoilValue(apiQuerySelector)

/**
 * Recoil managed state selector representing...
 *
 * Utilise useRecoilValue hook to notify components subscribing to re-render.
 *
 */
export const currentApiQuerySelector = selector<{ [key: string]: any }>({
  key: 'currentApiQuery',
  get: ({ get }) => get(apiQuerySelector(get(currentApiStateAtom)))
})
// const currentApiQuery = useRecoilValue(currentApiQuerySelector)
// const refreshApiQuery = useRecoilRefresher_UNSTABLE(currentApiQuerySelector)

export type AxiosResponseAlias = {
  data: {
    [key: string]: any
  }
}

async function fetchAxios(url): Promise<AxiosResponseAlias> {
  if (url === null) {
    return
  } else {
    try {
      const response = await axios.get(url)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * Recoil managed state representing the selected request quantity
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const httpClientAtom = atom<string>({
  key: 'httpClient',
  default: 'Axios'
})
// const [httpClient, setHttpClient] = useRecoilState(httpClientAtom)
// const setHttpClient = useSetRecoilState(httpClientAtom)
// const httpClient = useRecoilValue(httpClientAtom)
// const resetHttpClient = useResetRecoilState(httpClientAtom)

const localStorageEffect =
  key =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const currentJsonDataAtom = atom<AxiosResponseAlias[]>({
  key: 'currentJsonData',
  default: [],
  effects: [localStorageEffect('current_json')]
})

// const currentJsonData = useRecoilValue(currentJsonDataAtom)
