/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */

/**
 * @description
 *   带数据的返回数据
 */
export interface DataTransOutput {
  /**
   * @description
   *   返回数据
   */
  data?: any;
  /**
   * @description
   *   错误码。
   * 100000 成功
   * 200000 入参不合法
   * 400000 权限不足
   * 500000 服务失败
   * @format: int32
   */
  transCode: number;
  /**
   * @description
   *   错误信息。成功：“成功” 失败：“失败对应的msg”
   */
  transMessage: string;
  /**
   * @description
   *   信息详情”
   */
  transMessageDetail: string;
}

export interface ResultListMap {
  description?: string;
}

export interface ResultListTsgMap {
  description?: string;
  result?: Array<TsgMap>;
  /** @format: int32 */
  returnCode?: number;
}

export interface OutputParameterVo {
  /**
   * @description
   *   开卡日
   */
  dueDay: string;
  /**
   * @description
   *   进件渠道
   */
  requestChannel: string;
}

export interface ABCOutputParameters {
  /**
   * @description
   *   开卡日
   */
  dueDay: string;
  /**
   * @description
   *   进件渠道
   */
  requestChannel: string;
}

export interface MixedChineseAndEnglishWithSpacesVo {
  /**
   * @description
   *   开卡日
   */
  dueDay: string;
  /**
   * @description
   *   进件渠道
   */
  requestChannel: string;
}

export interface QueryParameters {
  /**
   * @description
   *   开卡日
   */
  dueDay: string;
  /**
   * @description
   *   进件渠道
   */
  requestChannel: string;
  data?: {
    [propertyName: string]: DataTransOutput;
  };
}

export interface GeneralRequestParameterTokenOutputParameterVO {
  bizParamVo?: OutputParameterVo;
}

/**
 * @description
 *   带数据的返回数据
 */
export interface DatatransoutputOutputParameterVO {
  /**
   * @description
   *   返回数据
   */
  data?: OutputParameterVo;
  /**
   * @description
   *   错误码。
   * 100000 成功
   * 200000 入参不合法
   * 400000 权限不足
   * 500000 服务失败
   * @format: int32
   */
  transCode: number;
  /**
   * @description
   *   错误信息。成功：“成功” 失败：“失败对应的msg”
   */
  transMessage: string;
  /**
   * @description
   *   信息详情”
   */
  transMessageDetail: string;
}

export type TsgMap = any;
export type GeneralRequestParameterQueryParameter = any;
