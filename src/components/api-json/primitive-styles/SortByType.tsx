import { motion } from 'framer-motion'
import { ApiDataSortAlias } from '../data-types/typeAliases'
import {
  TypeArraySx,
  TypeBooleanSx,
  TypeFunctionSx,
  TypeNumberSx,
  TypeObjectSx,
  TypeStringSx
} from '.'

export default function SortByType({ index, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return (
          <TypeArraySx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
      case 'boolean':
        return (
          <TypeBooleanSx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
      case 'function':
        return (
          <TypeFunctionSx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
      case 'number':
        return (
          <TypeNumberSx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
      case 'object':
        return (
          <TypeObjectSx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
      case 'string':
        return (
          <TypeStringSx
            index={index}
            key={index}
            value={dataValue}
            dataKey={dataKey}
            variant='json'
          />
        )
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
