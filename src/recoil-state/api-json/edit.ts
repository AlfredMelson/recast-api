import { atom } from 'recoil'
import { EditResponseAlias } from '../../pages/api-json/data-types/typeAliases'

/**
 * State representing an array of element ids
 *
 */
export const currentDataAtom = atom<EditResponseAlias['data']>({
  key: 'currentData',
  default: {}
})
// const [currentData, setCurrentData] = useRecoilState(currentDataAtom)
// const setCurrentData = useSetRecoilState(currentDataAtom)
// const currentData = useRecoilValue(currentDataAtom)
// const resetCurrentData= useResetRecoilState(currentDataAtom)
