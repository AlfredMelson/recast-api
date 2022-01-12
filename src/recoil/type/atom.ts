// WORKING DOC
//
import { atom } from 'recoil'
import _ from 'lodash'

export const isArray = (data: []) => Array.isArray(data)
// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = (data: object) => !isArray([]) && _.isObject(data)
export const isNull = (data: null) => data === null
export const isNumber = (data: number) => _.isNumber(data)
export const isString = (data: string) => _.isString(data)
export const isBoolean = (data: boolean) => _.isBoolean(data)

export enum DataType {
  Object = 'object',
  Array = 'array',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Null = 'null',
}

/**
 * @name dataTypeAtom
 * @description state representing the user entered API URL
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [dataType, setDataType] = useRecoilState(dataTypeAtom)
 * const setDataType = useSetRecoilState(dataTypeAtom)
 * const dataType = useRecoilValue(dataTypeAtom)
 * const resetDataType = useResetRecoilState(dataTypeAtom)
 */
export const dataTypeAtom = atom<DataType>({
  key: 'dataType',
  default: DataType.Object,
})

// /**
//  * @name typeDeterminationSelector
//  * @description
//  * @return
//  * @bug Objects stored in atoms will freeze in development mode when bugs are detected
//  *
//  * Hooks to manage state changes and notify components subscribing to re-render:
//  * const [localJson, setLocalJson] = useRecoilState(localJsonSelector)
//  * const setLocalJson = useSetRecoilState(localJsonSelector)
//  * const localJson  = useRecoilValue(localJsonSelector)
//  */
// export const typeDeterminationSelector = selector<DataType>({
//   key: 'typeDetermination',
//   get: ({ get }) => {
//     const filter = get(dataTypeAtom)
//     const list = get(todoListState)
//     if (isNumber(value)) {
//       return DataType.Number
//     } else if (isString(value)) {
//       return DataType.String
//     } else if (isBoolean(value)) {
//       return DataType.Boolean
//     } else if (isNull(value)) {
//       return DataType.Null
//     } else if (isArray(value)) {
//       return DataType.Array
//     } else {
//       return DataType.Object
//     }
//   },
// })
