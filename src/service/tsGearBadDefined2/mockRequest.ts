/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../tsGearRequester";
import type { ReplyVOInt } from "./definition";

/** @description request parameter type for deleteApiDataboardBoardEs */
export interface DeleteApiDataboardBoardEsOption {
  /**
   * @description
   *   索引数组
   */
  body?: Array<string>;
}

/** @description response type for deleteApiDataboardBoardEs */
export interface DeleteApiDataboardBoardEsResponse {
  /**
   * @description
   *   OK
   */
  200: ReplyVOInt;
  /**
   * @description
   *   No Content
   */
  204: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
}

export type DeleteApiDataboardBoardEsResponseSuccess =
  DeleteApiDataboardBoardEsResponse[200];
/**
 * @description
 *   删除索引
 * @tags: Es
 * @produces: *／*
 */
export const deleteApiDataboardBoardEs = /* #__PURE__ */ (() => {
  /** http method */
  const method = "delete";
  /** request url */
  const url = "/api/databoard/board/es";
  const mockData = "" as unknown as DeleteApiDataboardBoardEsResponseSuccess;
  const mockRequest = function (
    option?: DeleteApiDataboardBoardEsOption
  ): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();
