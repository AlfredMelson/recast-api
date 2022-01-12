import _ from 'lodash'
import { atom, atomFamily } from 'recoil'
// import { isArray } from '../../components/editor/objects/types'
// import { userGeneratedJsonAtom } from './atom'

export const selectedObjectAtom = atom<string | null>({
  key: 'selectedObject',
  default: null,
})

// const [selectedObject, setSelectedObject] = useRecoilState(selectedObjectAtom)
// const setSelectedObject = useSetRecoilState(selectedObjectAtom)
// const selectedObject  = useRecoilValue(selectedObjectAtom)

export type Path = string[]

export enum EditType {
  Key,
  Value,
}

export interface EditMode {
  path: Path
  type: EditType
}

export const objectPathNameAtomFamily = atomFamily({
  key: 'objectPathName',
  default: ['', ''],
})

// const [objectPathName, setObjectPathName] = useRecoilState(objectPathNameAtomFamily)
// const setObjectPathName = useSetRecoilState(objectPathNameAtomFamily)
// const objectPathName  = useRecoilValue(objectPathNameAtomFamily)

export const getParentPathAndName = (path: Path): [Path, string] => {
  let parentPath: Path = []
  let name = ''
  if (path.length === 1) {
    name = path[0]
  } else if (path.length > 1) {
    parentPath = _.initial(path)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    name = _.last<string>(path)!
  }
  return [parentPath, name]
}

// interface State {
//   data: any
//   editMode: EditMode | null
// }

// const initialState: State = {
//   data: null,
//   editMode: null,
// }

// export const deleteTextPathSelector = selector({
//   key: 'deleteTextPath',
//   get: ({ get }) => {
//     const userGeneratedJson = get(userGeneratedJsonAtom)

//     const path = userGeneratedJson // How to get exact path ?
//     const [parentPath, name] = getParentPathAndName(path)
//     const data = userGeneratedJson
//     if (parentPath.length === 0) {
//       // the traget is root object
//       if (isArray(data)) {
//         // Array
//         userGeneratedJson = data.filter((_: any, index: any) => `${index}` !== name)
//       } else {
//         // Object
//         _.unset(userGeneratedJson, path)
//       }
//     } else {
//       // the traget is not root object
//       const targetData = _.get(data, parentPath)
//       if (isArray(targetData)) {
//         // Array
//         _.set(
//           userGeneratedJson,
//           parentPath,
//           targetData.filter((_: any, index: number) => index !== parseInt(name))
//         )
//       } else {
//         // Object
//         _.unset(userGeneratedJson, path)
//       }
//     }
//   },
// })

// const [deleteTextPath, setDeleteTextPath] = useRecoilState(deleteTextPathSelector)
// const setDeleteTextPath = useSetRecoilState(deleteTextPathSelector)
// const deleteTextPath  = useRecoilValue(deleteTextPathSelector)

export const textEditModeAtom = atom<boolean>({
  key: 'textEditMode',
  default: false,
})
// const [textEditMode, setTextEditMode] = useRecoilState(textEditModeAtom)
// const setTextEditMode = useSetRecoilState(textEditModeAtom)
// const textEditMode  = useRecoilValue(textEditModeAtom)
