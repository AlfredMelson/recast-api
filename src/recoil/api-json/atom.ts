import axios from 'axios'
import { atom, selector } from 'recoil'

/**
 * @name userQuerySelector
 * @description state representing ...
 * @return
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * selector(options)
 * Selectors represent a function, or derived state in Recoil. You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values. If only a get function is provided, the selector is read-only and returns a RecoilValueReadOnly object. If a set is also provided, it returns a writeable RecoilState object.
 *
 * Dynamic Dependencies
 * A read-only selector has a get method which evaluates the value of the selector based on dependencies. If any of those dependencies are updated, then the selector will re-evaluate. The dependencies are dynamically determined based on the atoms or selectors you actually use when evaluating the selector. Depending on the values of the previous dependencies, you may dynamically use different additional dependencies. Recoil will automatically update the current data-flow graph so that the selector is only subscribed to updates from the current set of dependencies
 *
 * Writeable Selectors
 * A bi-directional selector receives the incoming value as a parameter and can use that to propagate the changes back upstream along the data-flow graph. Because the user may either set the selector with a new value or reset the selector, the incoming value is either of the same type that the selector represents or a DefaultValue object which represents a reset action.
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const userQuery  = useRecoilValue(userQuerySelector)
 */
export const userQuerySelector = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    const userSubmittedUrl = get(userSubmittedUrlAtom)
    if (userSubmittedUrl === undefined) {
      return
    } else {
      const response = axios.get(userSubmittedUrl)
      console.log('response', response)
      // const urlData = await fetch(userSubmittedUrl).then(response => response.json())
      // console.log('urlData: ', urlData)
      return response
    }
  },
  // set: ({ set }, newValue) => {
  //   set(apiData(newValue.data), apiFullResponse(newValue))
  // },
  // set: ({set}, newValue) =>
  //   set(
  //     tempFahrenheit,
  //     newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
  //   ),
})

/**
 * @name userTypedUrlAtom
 * @description state representing the user entered API URL
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
 * const setUserTypedUrl = useSetRecoilState(userTypedUrlAtom)
 * const userTypedUrl = useRecoilValue(userTypedUrlAtom)
 * const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)
 */
export const userTypedUrlAtom = atom<string>({
  key: 'userTypedUrl',
  default: '',
})

/**
 * @name userSubmittedUrlAtom
 * @description state representing the textfield when user submits
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * userSubmittedUrlAtom represents the state of the textfield when user submits.
 * @param {String | undefined}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userSubmittedUrl, setUserSubmittedUrl] = useRecoilState(userSubmittedUrlAtom)
 * const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)
 * const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
 * const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)
 */
export const userSubmittedUrlAtom = atom<string | undefined>({
  key: 'userSubmittedUrl',
  default: undefined,
})

/**
 * @name userToggledApiAtom
 * @description state representing the user toggled api response
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)
 * const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
 * const userToggledApi = useRecoilValue(userToggledApiAtom)
 * const resetUserToggledApi = useResetRecoilState(userToggledApiAtom)
 */
export type UserToggledApiAtomOptions = 'data' | 'edit' | 'full' | 'ts' | 'headers' | 'dtype'

export const userToggledApiAtom = atom<UserToggledApiAtomOptions>({
  key: 'userToggledApi',
  default: 'data',
})

/**
 * @name selectedElementAtom
 * @description state representing the selected element
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
 * const setSelectedElement = useSetRecoilState(selectedElementAtom)
 * const selectedElement = useRecoilValue(selectedElementAtom)
 * const resetSelectedElement = useResetRecoilState(selectedElementAtom)
 */
export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null,
})

/**
 * @name elementStateAtom
 * @description state representing an array of element ids
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [elementState, setElementState] = useRecoilState(elementStateAtom)
 * const setElementState = useSetRecoilState(elementStateAtom)
 * const elementState = useRecoilValue(elementStateAtom)
 * const resetElementState = useResetRecoilState(elementStateAtom)
 */
export const elementStateAtom = atom<string[]>({
  key: 'elementState',
  default: [],
})

/**
 * @name selectedElementProperties
 * @description state representing an array of element ids
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [elementState, setElementState] = useRecoilState(selectedElementProperties)
 * const setElementState = useSetRecoilState(selectedElementProperties)
 * const elementState = useRecoilValue(selectedElementProperties)
 * const resetElementState = useResetRecoilState(selectedElementProperties)
 */
export const selectedElementProperties = selector({
  key: 'selectedElementProperties',
  get: ({ get }) => {
    const selectedElementId = get(selectedElementAtom)
    // caseA: without a selected element there aren't any properties
    if (selectedElementId == null) return

    // caseB: else
    // return get(elementState(selectedElementId))
  },
})
