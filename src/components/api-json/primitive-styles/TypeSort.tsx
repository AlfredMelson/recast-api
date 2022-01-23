import { motion } from 'framer-motion'
import { ApiDataSortAlias } from '../data-types/typeAliases'
import { TypeArray, TypeBoolean, TypeFunction, TypeNumber, TypeObject, TypeString } from '.'

export default function TypeSort({ index, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <TypeArray index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'boolean':
        return <TypeBoolean index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'function':
        return <TypeFunction index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'number':
        return <TypeNumber index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'object':
        return <TypeObject index={index} key={index} value={dataValue} dataKey={dataKey} />
      case 'string':
        return <TypeString index={index} key={index} value={dataValue} dataKey={dataKey} />
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
