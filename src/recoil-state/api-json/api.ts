// import axios from 'axios'
import { atom, selector } from 'recoil'
import { BaseUrlData } from '../../cms'

/**
 * Recoil managed state representing the selected api provider, category and quantity
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const selectedApiSelector = selector<string>({
  key: 'selectedApi',
  get: ({ get }) => {
    // pull in the selected api source
    const provider = get(dataSourceAtom)
    if (dataSourceAtom) {
      // filter base from BaseUrlData using selected provider (apiProvider)
      const selectedSource = BaseUrlData.filter(base => base.index === provider)[0].base

      const selectedCategory = get(dataCategoryAtom)

      const concatSourceCategory = selectedSource.concat(selectedCategory)

      const selectedQuantity = get(dataQuantityAtom)

      const concatQuantity = concatSourceCategory.concat(selectedQuantity)

      return concatQuantity
    }

    // const response = axios.get(concatQuantity)
    // console.log('response', response)
    // const urlData = await fetch(userSubmittedUrl).then(response => response.json())
    // console.log('urlData: ', urlData)
    // return response
  },
  set: ({ reset }) => {
    reset(dataSourceAtom)
    reset(dataCategoryAtom)
    reset(dataQuantityAtom)
  }
})
// const [selectedApi, setSelectedApi] = useRecoilState(selectedApiSelector)
// const setSelectedApi = useSetRecoilState(selectedApiSelector)
// const selectedApi = useRecoilValue(selectedApiSelector)
// const resetSelectedApi = useResetRecoilState(selectedApiSelector)

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
  default: ''
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
  default: ''
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
  default: ''
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
  default: ''
})
// const [dataUrl, setDataUrl] = useRecoilState(dataUrlAtom)
// const setDataUrl = useSetRecoilState(dataUrlAtom)
// const dataUrl = useRecoilValue(dataUrlAtom)
// const resetDataUrl = useResetRecoilState(dataUrlAtom)
