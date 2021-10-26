/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */

export type BodyBuilder = any;

export type PageVOListVO = PageVO<ListVO>;
export interface ReplyVOPageVOFollowRecordVO {
  /**
   * @description
   *   响应代码【0正确,非0错误】
   * @example
   *   000000
   */
  code: string;
  /**
   * @description
   *   返回数据
   */
  data?: PageVOFollowRecordVO;
  /**
   * @description
   *   结果描述
   * @example
   *   success
   */
  message: string;
}

export interface PageVO<ListVO = any> {
  /**
   * @description
   *   数据列表
   */
  entities: Array<ListVO>;
  /**
   * @description
   *   总条数
   * @format: int32
   * @example
   *   100
   */
  entityCount: number;
  /**
   * @description
   *   开始序号
   * @format: int32
   * @example
   *   0
   */
  firstEntityIndex: number;
  /**
   * @description
   *   结束序号
   * @format: int32
   * @example
   *   10
   */
  lastEntityIndex: number;
  /**
   * @description
   *   总页数
   * @format: int32
   * @example
   *   10
   */
  pageCount: number;
  /**
   * @description
   *   页码
   * @format: int32
   * @example
   *   1
   */
  pageNo: number;
  /**
   * @description
   *   每页条数
   * @format: int32
   * @example
   *   10
   */
  pageSize: number;
}

export type ListVO = any;
export type PageVOFollowRecordVO = any;
export type ReplyVOInt = any;
