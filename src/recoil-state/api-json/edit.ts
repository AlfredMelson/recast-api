import { atom } from 'recoil'
import { EditResponseAlias } from '../../components/tab-panels/data-types/typeAliases'

/**
 * State representing an array of element ids
 *
 */
export const currentDataAtom = atom<EditResponseAlias | null>({
  key: 'currentData',
  default: null
})
// const [currentData, setCurrentData] = useRecoilState(currentDataAtom)
// const setCurrentData = useSetRecoilState(currentDataAtom)
// const currentData = useRecoilValue(currentDataAtom)
// const resetCurrentData= useResetRecoilState(currentDataAtom)
