import { atom, selector } from 'recoil'

// /**
//  * @name localPersist
//  * @description
//  * @return
//  * @bug
//  */
// export const localPersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
//   const storedJsonData = localStorage.getItem(node.key)
//   if (storedJsonData === 'userGeneratedJson') {
//     setSelf(storedJsonData)
//   }

//   onSet(newItems => {
//     if (newItems instanceof DefaultValue) {
//       localStorage.removeItem(node.key)
//     } else {
//       localStorage.setItem(node.key, newItems)
//     }
//   })
// }

// const idsState = atom<number[]>({
//   key: 'ids',
//   default: [],
//   effects_UNSTABLE: [localPersist],
// })

/**
 * @name userGeneratedJsonAtom
 * @description state representing user provided text
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userGeneratedJson, setUserGeneratedJson] = useRecoilState(userGeneratedJsonAtom)
 * const setUserGeneratedJson = useSetRecoilState(userGeneratedJsonAtom)
 * const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)
 * const resetUserGeneratedJson = useResetRecoilState(userGeneratedJsonAtom)
 */
export const userGeneratedJsonAtom = atom<string>({
  key: 'userGeneratedJson',
  default: ''
  // effects_UNSTABLE: [localPersist]
})

/**
 * @name editorTextSelector
 * @description
 * @return
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [editedEditorText, setEditedEditorText] = useRecoilState(editorTextSelector)
 * const setEditedEditorText = useSetRecoilState(editorTextSelector)
 * const editedEditorText = useRecoilValue(editorTextSelector)
 */
export const editorTextSelector = selector<string>({
  key: 'editedEditorText',
  get: ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    return editorText
  },
  set: ({ set }, newEditedEditorText) => {
    const newEditorText = newEditedEditorText
    set(userGeneratedJsonAtom, newEditorText)
  }
})

/**
 * @name parseJsonSelector
 * @description
 * @return
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [parseJson, setParseJson] = useRecoilState(parseJsonSelector)
 * const parseJson = useRecoilValue(parseJsonSelector)
 */
export const parseJsonSelector = selector({
  key: 'parseJson',
  get: async ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    try {
      const parsedJson = await JSON.parse(editorText)
      return parsedJson
      // eslint-disable-next-line no-empty
    } catch {}
  }
})

/**
 * @name stringifyJsonSelector
 * @description
 * @return
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [stringifyJson, setStringifyJson] = useRecoilState(stringifyJsonSelector)
 * const stringifyJson = useRecoilValue(stringifyJsonSelector)
 */
export const stringifyJsonSelector = selector({
  key: 'stringifyJson',
  get: ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    try {
      const stringifiedJson = JSON.stringify(editorText)
      return stringifiedJson
      // eslint-disable-next-line no-empty
    } catch {}
  }
})

/**
 * @name monacoThemeAtom
 * @description state representing user provided text
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [monacoTheme, setMonacoTheme] = useRecoilState(monacoThemeAtom)
 * const setMonacoTheme = useSetRecoilState(monacoThemeAtom)
 * const monacoTheme = useRecoilValue(monacoThemeAtom)
 * const resetMonacoTheme = useResetRecoilState(monacoThemeAtom)
 */
export const monacoThemeAtom = atom<string>({
  key: 'monacoTheme',
  default: ''
})
