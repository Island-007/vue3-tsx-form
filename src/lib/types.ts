export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTERGER' = 'interger',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'BOOLEAN' = 'boolean',
}

type SchemaRef = { $ref: string }

export interface Schema {
  type: SchemaTypes | string
  const?: any
  format?: any
  default?: any
  properties?: {
    [key: string]: Schema | SchemaRef
  }
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: Schema | SchemaRef
  }
  oneOf?: Schema[]
  required?: string[]
  enum?: any[]
}
