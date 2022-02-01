import { atom } from 'recoil'

/**
 * Recoil managed state representing mdrawer containing user jsonvisability
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const dataDrawerOpenAtom = atom<boolean>({
  key: 'dataDrawerOpen',
  default: false
})
// const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
// const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
// const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)
// const resetDataDrawerOpen = useResetRecoilState(dataDrawerOpenAtom)

/**
 * Recoil managed state representing minified json visability
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const minifyDialogOpenAtom = atom<boolean>({
  key: 'minifyDialogOpen',
  default: false
})
// const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
// const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)
// const minifyDialogOpen = useRecoilValue(minifyDialogOpenAtom)
// const resetMinifyDialogOpen = useResetRecoilState(minifyDialogOpenAtom)

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

/**
 * localStorageEffect
 *
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 */
const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: string, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const currentEditorTextState = atom<{ [key: string]: any | null }>({
  key: 'currentEditorText',
  default: null,
  effects: [localStorageEffect('editorText')]
})

// const [currentEditorText, setCurrentEditorText] = useRecoilState(currentEditorTextState)
// const setCurrentEditorText = useSetRecoilState(currentEditorTextState)
// const currentEditorText = useRecoilValue(currentEditorTextState)
// const resetCurrentEditorText = useResetRecoilState(currentEditorTextState)

// Update state within Editor
// export const updateEditorTextState = atom<string | null>({
//   key: 'updateEditorText',
//   default: null,
//   effects: [
//     ({ onSet }) => {
//       onSet(newValue => {
//         console.debug('Current user ID:', newValue)
//       })
//     }
//   ]
// })
