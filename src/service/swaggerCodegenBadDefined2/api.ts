/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from 'url'
import * as portableFetch from 'portable-fetch'
import { Configuration } from './configuration'

const BASE_PATH = '/'.replace(/\/+$/, '')

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
}

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
  (url: string, init?: any): Promise<Response>
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string
  options: any
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected fetch: FetchAPI = portableFetch,
  ) {
    if (configuration) {
      this.configuration = configuration
      this.basePath = configuration.basePath || this.basePath
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: 'RequiredError'
  constructor(public field: string, msg?: string) {
    super(msg)
  }
}

/**
 *
 * @export
 * @interface BodyBuilder
 */
export interface BodyBuilder {}
/**
 *
 * @export
 * @interface PageVOListVO
 */
export interface PageVOListVO {
  /**
   * 数据列表
   * @type {Array<ListVO>}
   * @memberof PageVOListVO
   */
  entities: Array<ListVO>
  /**
   * 总条数
   * @type {number}
   * @memberof PageVOListVO
   */
  entityCount: number
  /**
   * 开始序号
   * @type {number}
   * @memberof PageVOListVO
   */
  firstEntityIndex: number
  /**
   * 结束序号
   * @type {number}
   * @memberof PageVOListVO
   */
  lastEntityIndex: number
  /**
   * 总页数
   * @type {number}
   * @memberof PageVOListVO
   */
  pageCount: number
  /**
   * 页码
   * @type {number}
   * @memberof PageVOListVO
   */
  pageNo: number
  /**
   * 每页条数
   * @type {number}
   * @memberof PageVOListVO
   */
  pageSize: number
}
/**
 *
 * @export
 * @interface ReplyVOPageVOFollowRecordVO
 */
export interface ReplyVOPageVOFollowRecordVO {
  /**
   * 响应代码【0正确,非0错误】
   * @type {string}
   * @memberof ReplyVOPageVOFollowRecordVO
   */
  code: string
  /**
   *
   * @type {PageVOFollowRecordVO}
   * @memberof ReplyVOPageVOFollowRecordVO
   */
  data?: PageVOFollowRecordVO
  /**
   * 结果描述
   * @type {string}
   * @memberof ReplyVOPageVOFollowRecordVO
   */
  message: string
}
/**
 * EsApi - fetch parameter creator
 * @export
 */
export const EsApiFetchParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 删除索引
     * @param {Array<string>} [body] 索引数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    delIndexUsingDELETE(body?: Array<string>, options: any = {}): FetchArgs {
      const localVarPath = `/api/databoard/board/es`
      const localVarUrlObj = url.parse(localVarPath, true)
      const localVarRequestOptions = Object.assign(
        { method: 'DELETE' },
        options,
      )
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication Authorization required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? configuration.apiKey('TOKEN')
            : configuration.apiKey
        localVarHeaderParameter['TOKEN'] = localVarApiKeyValue
      }

      localVarHeaderParameter['Content-Type'] = '*/*'

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      )
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers,
      )
      const needsSerialization =
        <any>'Array&lt;string&gt;' !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || ''

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * EsApi - functional programming interface
 * @export
 */
export const EsApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 删除索引
     * @param {Array<string>} [body] 索引数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    delIndexUsingDELETE(
      body?: Array<string>,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<ReplyVOint> {
      const localVarFetchArgs = EsApiFetchParamCreator(
        configuration,
      ).delIndexUsingDELETE(body, options)
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH,
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options,
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json()
          } else {
            throw response
          }
        })
      }
    },
  }
}

/**
 * EsApi - factory interface
 * @export
 */
export const EsApiFactory = function (
  configuration?: Configuration,
  fetch?: FetchAPI,
  basePath?: string,
) {
  return {
    /**
     *
     * @summary 删除索引
     * @param {Array<string>} [body] 索引数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    delIndexUsingDELETE(body?: Array<string>, options?: any) {
      return EsApiFp(configuration).delIndexUsingDELETE(body, options)(
        fetch,
        basePath,
      )
    },
  }
}

/**
 * EsApi - object-oriented interface
 * @export
 * @class EsApi
 * @extends {BaseAPI}
 */
export class EsApi extends BaseAPI {
  /**
   *
   * @summary 删除索引
   * @param {Array<string>} [body] 索引数组
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EsApi
   */
  public delIndexUsingDELETE(body?: Array<string>, options?: any) {
    return EsApiFp(this.configuration).delIndexUsingDELETE(body, options)(
      this.fetch,
      this.basePath,
    )
  }
}
