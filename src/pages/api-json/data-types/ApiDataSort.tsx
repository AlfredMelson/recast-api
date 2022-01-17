import { motion } from 'framer-motion'
import { ApiDataSortAlias } from './typeAliases'
import { ApiArray, ApiBoolean, ApiFunction, ApiNumber, ApiObject, ApiString } from '.'

export function ApiDataSort({
  index,
  dataType,
  dataValue,
  dataKey,
  onEdit,
  onDelete
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
