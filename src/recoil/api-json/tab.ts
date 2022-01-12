import { atom } from 'recoil'

/**
 * @name apiTabSelectedAtom
 * @description state representing the full response returned from Axios api call
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiTabSelected, setApiTabSelected] = useRecoilState(apiTabSelectedAtom)
 * const setApiTabSelected = useSetRecoilState(apiTabSelectedAtom)
 * const apiTabSelected = useRecoilValue(apiTabSelectedAtom)
 * const resetApiTabSelected = useResetRecoilState(apiTabSelectedAtom)
 */
export const apiTabSelectedAtom = atom<string>({
  key: 'apiTabSelected',
  default: '0',
})
