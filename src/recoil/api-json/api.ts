import { atom } from 'recoil'

/**
 * Recoil managed state representing the selected api provider
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const dataSourceAtom = atom<string>({
  key: 'dataSource',
  default: '',
})
// const [dataSource, setDataSource] = useRecoilState(dataSourceAtom)
// const setDataSource = useSetRecoilState(dataSourceAtom)
// const dataSource = useRecoilValue(dataSourceAtom)
// const resetDataSource = useResetRecoilState(dataSourceAtom)

/**
 * Recoil managed state representing the selected providers category
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const dataCategoryAtom = atom<string>({
  key: 'dataCategory',
  default: '',
})
// const [dataCategory, setDataCategory] = useRecoilState(dataCategoryAtom)
// const setDataCategory = useSetRecoilState(dataCategoryAtom)
// const dataCategory = useRecoilValue(dataCategoryAtom)
// const resetDataCategory = useResetRecoilState(dataCategoryAtom)

/**
 * Recoil managed state representing the selected request quantity
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const dataQuantityAtom = atom<string>({
  key: 'dataQuantity',
  default: '',
})
// const [dataQuantity, setDataQuantity] = useRecoilState(dataQuantityAtom)
// const setDataQuantity = useSetRecoilState(dataQuantityAtom)
// const dataQuantity = useRecoilValue(dataQuantityAtom)
// const resetDataQuantity = useResetRecoilState(dataQuantityAtom)

/**
 * Recoil managed state representing the combined url of the provider, category, and quantity
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const dataUrlAtom = atom<string>({
  key: 'dataUrl',
  default: '',
})
// const [dataUrl, setDataUrl] = useRecoilState(dataUrlAtom)
// const setDataUrl = useSetRecoilState(dataUrlAtom)
// const dataUrl = useRecoilValue(dataUrlAtom)
// const resetDataUrl = useResetRecoilState(dataUrlAtom)
