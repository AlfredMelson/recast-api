import { atom, selector } from 'recoil'
import { userGeneratedJsonAtom } from './atom'

export enum ValidityType {
  Valid = 'valid',
  Invalid = 'invalid',
  None = 'none',
}

/**
 * @name textAreaDataSelector
 * @description
 * @return
 * @bug
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [textareaData, setTextAreaValidity] = useRecoilState(textAreaDataSelector)
 * const setTextareaData = useSetRecoilState(textAreaDataSelector)
 * const textareaData  = useRecoilValue(textAreaDataSelector)
 */
export const textAreaDataSelector = selector<ValidityType>({
  key: 'textareaData',
  get: ({ get }) => {
    const userGeneratedJson = get(userGeneratedJsonAtom)
    if (userGeneratedJson === null) {
      try {
        JSON.parse(userGeneratedJson)
        return ValidityType.Valid
      } catch (e) {
        return ValidityType.Invalid
      }
    } else {
      return ValidityType.None
    }
  },
})

/**
 * @name jsonValiditySelector
 * @description
 * @return
 * @bug
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [jsonValidity, setJsonValidity] = useRecoilState(jsonValiditySelector)
 * const setJsonValidity = useSetRecoilState(jsonValiditySelector)
 * const jsonValidity  = useRecoilValue(jsonValiditySelector)
 */
export const jsonValiditySelector = selector<boolean>({
  key: 'jsonValidity',
  get: ({ get }) => {
    const textareaData = get(textAreaDataSelector)
    return textareaData === ValidityType.Valid ? true : false
  },
})

/**
 * @name validJsonAtom
 * @description
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [validJson, setValidJson] = useRecoilState(validJsonAtom)
 * const setValidJson = useSetRecoilState(validJsonAtom)
 * const validJson = useRecoilValue(validJsonAtom)
 * const resetValidJson = useResetRecoilState(validJsonAtom)
 */
export const validJsonAtom = atom<boolean>({
  key: 'validJson',
  default: true,
})
