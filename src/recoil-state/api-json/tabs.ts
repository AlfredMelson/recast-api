import { atom } from 'recoil'

/**
 * Recoil managed state representing the user toggled api response
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */

export type UserToggledApiAtomOptions =
  | 'axios'
  | 'data'
  | 'headers'
  | 'config'
  | 'edit'
  | 'ts'
  | 'dtype'

export const userToggledApiAtom = atom<UserToggledApiAtomOptions>({
  key: 'userToggledApi',
  default: 'data'
})
// const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)
// const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
// const userToggledApi = useRecoilValue(userToggledApiAtom)
// const resetUserToggledApi = useResetRecoilState(userToggledApiAtom)

/**
 * Recoil managed state representing the user selected api tab
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const apiTabSelectedAtom = atom<string>({
  key: 'apiTabSelected',
  default: '0'
})
// const [apiTabSelected, setApiTabSelected] = useRecoilState(apiTabSelectedAtom)
// const setApiTabSelected = useSetRecoilState(apiTabSelectedAtom)
// const apiTabSelected = useRecoilValue(apiTabSelectedAtom)
// const resetApiTabSelected = useResetRecoilState(apiTabSelectedAtom)
