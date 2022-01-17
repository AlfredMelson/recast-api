import { atom } from 'recoil'

/**
 * Recoil managed state representing the selected element
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null
})
// const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
// const setSelectedElement = useSetRecoilState(selectedElementAtom)
// const selectedElement = useRecoilValue(selectedElementAtom)
// const resetSelectedElement = useResetRecoilState(selectedElementAtom)

/**
 * Recoil managed state representing an array of element ids
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const elementStateAtom = atom<string[]>({
  key: 'elementState',
  default: []
})
// const [elementState, setElementState] = useRecoilState(elementStateAtom)
// const setElementState = useSetRecoilState(elementStateAtom)
// const elementState = useRecoilValue(elementStateAtom)
// const resetElementState = useResetRecoilState(elementStateAtom)
