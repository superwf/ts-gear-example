import type { BaseParameter } from 'swagger-schema-official'

export const tuple = <T extends string[]>(...args: T) => args

export const httpMethods = tuple(
  'get',
  'put',
  'post',
  'delete',
  'options',
  'head',
  'patch',
)

export type HttpMethod = typeof httpMethods[number]

export type RequestParameterPosition = BaseParameter['in']

/** request parameter option */
export type RequestParameter = {
  method?: HttpMethod
  basePath?: string
  host?: string
} & {
  [position in RequestParameterPosition]?: any
}
