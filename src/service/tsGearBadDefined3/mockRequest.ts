/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../tsGearRequester";
import type {
  GeneralRequestParameterQueryParameter,
  DataTransOutput,
  ResultListTsgMap,
} from "./definition";

/** @description request parameter type for postApiCoreAssetCreditQueryPastCreditCardBillGather */
export interface PostApiCoreAssetCreditQueryPastCreditCardBillGatherOption {
  /**
   * @description
   *   requestParamVo
   */
  body: GeneralRequestParameterQueryParameter;
}

/** @description response type for postApiCoreAssetCreditQueryPastCreditCardBillGather */
export interface PostApiCoreAssetCreditQueryPastCreditCardBillGatherResponse {
  /**
   * @description
   *   OK
   */
  200: DataTransOutput;
  /**
   * @description
   *   Created
   */
  201: any;
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
  /**
   * @description
   *   Not Found
   */
  404: any;
}

export type PostApiCoreAssetCreditQueryPastCreditCardBillGatherResponseSuccess =
  PostApiCoreAssetCreditQueryPastCreditCardBillGatherResponse[200];
/**
 * @description
 *   往期账单汇总
 *   往期账单汇总
 * @tags: credit-query-controller
 * @produces: application／json;charset=UTF-8
 * @consumes: application／json;charset=UTF-8
 */
export const postApiCoreAssetCreditQueryPastCreditCardBillGather =
  /* #__PURE__ */ (() => {
    /** http method */
    const method = "post";
    /** request url */
    const url = "/api/core/asset/credit/query/pastCreditCardBillGather";
    const mockData = {
      data: {},
      transCode: 0,
      transMessage: "string",
      transMessageDetail: "string",
    } as unknown as PostApiCoreAssetCreditQueryPastCreditCardBillGatherResponseSuccess;
    const mockRequest = function (
      option: PostApiCoreAssetCreditQueryPastCreditCardBillGatherOption
    ): Promise<PostApiCoreAssetCreditQueryPastCreditCardBillGatherResponseSuccess> {
      return Promise.resolve(mockData);
    };
    mockRequest.method = method;
    mockRequest.url = url;
    mockRequest.mockData = mockData;
    return mockRequest;
  })();

/** @description request parameter type for postZzjyAllMsgGetAllMsgForMap */
export interface PostZzjyAllMsgGetAllMsgForMapOption {
  /**
   * @description
   *   accountTime
   */
  query: {
    /**
        @description
          accountTime */
    accountTime: string;
    /**
        @description
          type */
    type: string;
  };
}

/** @description response type for postZzjyAllMsgGetAllMsgForMap */
export interface PostZzjyAllMsgGetAllMsgForMapResponse {
  /**
   * @description
   *   OK
   */
  200: ResultListTsgMap;
  /**
   * @description
   *   Created
   */
  201: any;
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
  /**
   * @description
   *   Not Found
   */
  404: any;
}

export type PostZzjyAllMsgGetAllMsgForMapResponseSuccess =
  PostZzjyAllMsgGetAllMsgForMapResponse[200];
/**
 * @description
 *   站址经营-汇总首页
 * @tags: credit-query-controller
 * @produces: *／*
 * @consumes: application／json
 */
export const postZzjyAllMsgGetAllMsgForMap = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/zzjy/all-msg/getAllMsgForMap";
  const mockData = {
    description: "string",
    result: [""],
    returnCode: 0,
  } as unknown as PostZzjyAllMsgGetAllMsgForMapResponseSuccess;
  const mockRequest = function (
    option: PostZzjyAllMsgGetAllMsgForMapOption
  ): Promise<PostZzjyAllMsgGetAllMsgForMapResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();
