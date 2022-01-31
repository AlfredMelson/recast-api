// import axios from 'axios'
import { atom, selector } from 'recoil'
import { SourceSelection } from '../../cms'

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

    // find prefixed url of the selected provider
    const selectedSourcePrefix = SourceSelection.find(({ value }) => value === provider)?.prefix

    // find if the selected data source is Random Data
    const selectedSource = SourceSelection.find(({ value }) => value === provider)?.source
    const isJsonPlaceholder = selectedSource === 'Json Placeholder' && true

    // pull in the selected source category
    const selectedCategory = get(dataCategoryAtom)

    // chain the selected source with the selected category to create the url
    const chainCategory = selectedSourcePrefix + selectedCategory

    // pull in the selected fetch quantity
    const selectedQuantity = get(dataQuantityAtom)
    console.log('selectedQuantity', selectedQuantity)

    // chose to show quantity if selected soure is Json Placeholder
    if (isJsonPlaceholder) {
      const chainQuantity = chainCategory + selectedQuantity
      return chainQuantity
    } else {
      const chainQuantity = chainCategory
      return chainQuantity
    }
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
