import { atom } from 'recoil'

/**
 * @name dataDrawerOpenAtom
 * @description state representing visability of drawer containing user json
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
 * const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
 * const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)
 * const resetDataDrawerOpen = useResetRecoilState(dataDrawerOpenAtom)
 */

export const dataDrawerOpenAtom = atom<boolean>({
  key: 'dataDrawerOpen',
  default: false
})

/**
 * @name minifyDialogOpenAtom
 * @description set dialog with minified json visability
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
 * const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)
 * const minifyDialogOpen = useRecoilValue(minifyDialogOpenAtom)
 * const resetMinifyDialogOpen = useResetRecoilState(minifyDialogOpenAtom)
 */
export const minifyDialogOpenAtom = atom<boolean>({
  key: 'minifyDialogOpen',
  default: false
})

/**
 * @name minifiedTextAtom
 * @description store minified json in recoil
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
 * const setMinifiedText = useSetRecoilState(minifiedTextAtom)
 * const minifiedText = useRecoilValue(minifiedTextAtom)
 * const resetMinifiedText = useResetRecoilState(minifiedTextAtom)
 */
export const minifiedTextAtom = atom<string>({
  key: 'minifiedText',
  default: ''
})
