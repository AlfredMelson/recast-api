export function getType(
  value: string | undefined
):
  | 'array'
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined' {
  if (Array.isArray(value)) return 'array'
  return typeof value
}

export type EditResponseAlias = {
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
  // data?: { [key: string]: any } | undefined
}

export type ApiDataSortAlias = {
  index: number
  dataType: string | undefined
  dataKey: string | number
  dataValue?: any
  association?: 'json' | 'typescript'
  onDelete?: (key: number | string) => void
  onEdit?: (newValue: any, key: string | number) => void
}

export type ApiValueProp = {
  [index: number]: any
}

export type ApiArrayAlias = {
  index: number
  dataKey: number | string
  value?: Array<ApiValueProp>
  dataType?: string
  association?: 'json' | 'typescript'
  onEdit?: (newvalue: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiObjectAlias = {
  index: number
  dataKey: string | number
  value?: { [key: string]: any } | undefined
  dataType?: string | undefined
  association?: 'json' | 'typescript'
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiBooleanAlias = {
  index: number
  dataKey: string | number
  dataType?: string
  association?: 'json' | 'typescript'
  value?: []
}

export type ApiFunctionAlias = {
  index: number
  dataKey: string | number
  dataType?: string
  association?: 'json' | 'typescript'
  value?: any
}

export type ApiNumberAlias = {
  index: number
  dataKey: string | number
  value?: number
  dataType?: string
  association?: 'json' | 'typescript'
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiStringAlias = {
  index: number
  dataKey: string | number
  value?: string
  dataType?: string
  association?: 'json' | 'typescript'
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiUndefinedAlias = {
  index: number
  dataKey: string | number
  dataType: string
  association?: 'json' | 'typescript'
  value?: []
}
