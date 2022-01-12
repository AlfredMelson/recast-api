import { motion } from 'framer-motion'
import { atom } from 'recoil'
import { ApiDataSortAlias, EditResponseAlias } from './typeAliases'
import { ApiNumber, ApiString, ApiBoolean, ApiArray, ApiFunction, ApiObject } from '.'

/**
 * @name currentDataAtom
 * @description state representing an array of element ids
 * @param {EditResponseAlias['data']}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render:
 * const [currentData, setCurrentData] = useRecoilState(currentDataAtom)
 * const setCurrentData = useSetRecoilState(currentDataAtom)
 * const currentData = useRecoilValue(currentDataAtom)
 * const resetCurrentData= useResetRecoilState(currentDataAtom)
 */
export const currentDataAtom = atom<EditResponseAlias['data']>({
  key: 'currentData',
  default: {},
})

/**
 * @name elementState
 * @description state representing an array of element ids
 * @param {String[]}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks  to manage state changes and notify components subscribing to re-render:
 * const [elementState, setElementState] = useRecoilState(elementState)
 * const setElementState = useSetRecoilState(elementState)
 * const elementState = useRecoilValue(elementState)
 * const resetElementState = useResetRecoilState(elementState)
 */
// export const elementState = atomFamily<Element, any>({
//   key: 'element',
//   default: {
//     dataType: { dataType: '' },
//     dataValue: '',
//     dataKey: '',
//   },
// })

//     key={key}
//     id={id}
//     dataType={currentData ? getType(currentData[key]) : ''}
//     dataValue={currentData ? currentData[key] : ''}
//     dataKey={key}
//     onEdit={onEdit}
//     onDelete={onDelete}

export default function ApiDataSort({
  index,
  dataType,
  dataValue,
  dataKey,
  onEdit,
  onDelete,
}: ApiDataSortAlias) {
  // console.log('ApiDataSort : index', index)
  // console.log('ApiDataSort : dataType', dataType)
  // console.log('ApiDataSort : dataValue', dataValue)
  // console.log('ApiDataSort : dataKey', dataKey)

  const renderValue = () => {
    switch (dataType) {
      case 'number':
        return (
          <ApiNumber
            index={index}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'string':
        return (
          <ApiString
            index={index}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'object':
        return (
          <ApiObject
            index={index}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      case 'boolean':
        return <ApiBoolean index={index} value={dataValue} dataKey={dataKey} dataType={dataType} />
      case 'array':
        return (
          <ApiArray
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
          />
        )
      case 'function':
        return <ApiFunction index={index} value={dataValue} dataKey={dataKey} dataType={dataType} />
      default:
        return null
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 4 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      exit='removed'
      custom={index}>
      {renderValue()}
    </motion.div>
  )
}
