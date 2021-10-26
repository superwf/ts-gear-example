/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * 接口文档
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: 67890211@qq.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "//http://localhost/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface 
 */
export interface  {
    /**
     * 开卡日
     * @type {string}
     * @memberof 
     */
    dueDay: string;
    /**
     * 进件渠道
     * @type {string}
     * @memberof 
     */
    requestChannel: string;
    /**
     * 
     * @type {{ [key: string]: DataTransOutput; }}
     * @memberof 
     */
    data?: { [key: string]: DataTransOutput; };
}
/**
 * 
 * @export
 * @interface Abc
 */
export interface Abc {
    /**
     * 开卡日
     * @type {string}
     * @memberof Abc
     */
    dueDay: string;
    /**
     * 进件渠道
     * @type {string}
     * @memberof Abc
     */
    requestChannel: string;
}
/**
 * 带数据的返回数据
 * @export
 * @interface DataTransOutput
 */
export interface DataTransOutput {
    /**
     * 返回数据
     * @type {any}
     * @memberof DataTransOutput
     */
    data?: any;
    /**
     * 错误码。 100000 成功 200000 入参不合法 400000 权限不足 500000 服务失败
     * @type {number}
     * @memberof DataTransOutput
     */
    transCode: number;
    /**
     * 错误信息。成功：“成功” 失败：“失败对应的msg”
     * @type {string}
     * @memberof DataTransOutput
     */
    transMessage: string;
    /**
     * 信息详情”
     * @type {string}
     * @memberof DataTransOutput
     */
    transMessageDetail: string;
}
/**
 * 带数据的返回数据
 * @export
 * @interface DataTransOutputvo
 */
export interface DataTransOutputvo {
    /**
     * 
     * @type {Vo}
     * @memberof DataTransOutputvo
     */
    data?: Vo;
    /**
     * 错误码。 100000 成功 200000 入参不合法 400000 权限不足 500000 服务失败
     * @type {number}
     * @memberof DataTransOutputvo
     */
    transCode: number;
    /**
     * 错误信息。成功：“成功” 失败：“失败对应的msg”
     * @type {string}
     * @memberof DataTransOutputvo
     */
    transMessage: string;
    /**
     * 信息详情”
     * @type {string}
     * @memberof DataTransOutputvo
     */
    transMessageDetail: string;
}
/**
 * 
 * @export
 * @interface ResultListMap
 */
export interface ResultListMap {
    /**
     * 
     * @type {string}
     * @memberof ResultListMap
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface Tokenvo
 */
export interface Tokenvo {
    /**
     * 
     * @type {Vo}
     * @memberof Tokenvo
     */
    bizParamVo?: Vo;
}
/**
 * 
 * @export
 * @interface Vo
 */
export interface Vo {
    /**
     * 开卡日
     * @type {string}
     * @memberof Vo
     */
    dueDay: string;
    /**
     * 进件渠道
     * @type {string}
     * @memberof Vo
     */
    requestChannel: string;
}
/**
 * 
 * @export
 * @interface Vo_
 */
export interface Vo_ {
    /**
     * 开卡日
     * @type {string}
     * @memberof Vo_
     */
    dueDay: string;
    /**
     * 进件渠道
     * @type {string}
     * @memberof Vo_
     */
    requestChannel: string;
}
/**
 * CreditQueryControllerApi - fetch parameter creator
 * @export
 */
export const CreditQueryControllerApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 站址经营-汇总首页
         * @param {string} accountTime accountTime
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllMsgForMapUsingPOST(accountTime: string, type: string, options: any = {}): FetchArgs {
            // verify required parameter 'accountTime' is not null or undefined
            if (accountTime === null || accountTime === undefined) {
                throw new RequiredError('accountTime','Required parameter accountTime was null or undefined when calling getAllMsgForMapUsingPOST.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling getAllMsgForMapUsingPOST.');
            }
            const localVarPath = `/zzjy/all-msg/getAllMsgForMap`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (accountTime !== undefined) {
                localVarQueryParameter['accountTime'] = accountTime;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 往期账单汇总
         * @summary 往期账单汇总
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pastCreditCardBillGatherUsingPOST(options: any = {}): FetchArgs {
            const localVarPath = `/api/core/asset/credit/query/pastCreditCardBillGather`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CreditQueryControllerApi - functional programming interface
 * @export
 */
export const CreditQueryControllerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 站址经营-汇总首页
         * @param {string} accountTime accountTime
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllMsgForMapUsingPOST(accountTime: string, type: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResultListMap> {
            const localVarFetchArgs = CreditQueryControllerApiFetchParamCreator(configuration).getAllMsgForMapUsingPOST(accountTime, type, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 往期账单汇总
         * @summary 往期账单汇总
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pastCreditCardBillGatherUsingPOST(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<DataTransOutput> {
            const localVarFetchArgs = CreditQueryControllerApiFetchParamCreator(configuration).pastCreditCardBillGatherUsingPOST(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * CreditQueryControllerApi - factory interface
 * @export
 */
export const CreditQueryControllerApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary 站址经营-汇总首页
         * @param {string} accountTime accountTime
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllMsgForMapUsingPOST(accountTime: string, type: string, options?: any) {
            return CreditQueryControllerApiFp(configuration).getAllMsgForMapUsingPOST(accountTime, type, options)(fetch, basePath);
        },
        /**
         * 往期账单汇总
         * @summary 往期账单汇总
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pastCreditCardBillGatherUsingPOST(options?: any) {
            return CreditQueryControllerApiFp(configuration).pastCreditCardBillGatherUsingPOST(options)(fetch, basePath);
        },
    };
};

/**
 * CreditQueryControllerApi - object-oriented interface
 * @export
 * @class CreditQueryControllerApi
 * @extends {BaseAPI}
 */
export class CreditQueryControllerApi extends BaseAPI {
    /**
     * 
     * @summary 站址经营-汇总首页
     * @param {string} accountTime accountTime
     * @param {string} type type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CreditQueryControllerApi
     */
    public getAllMsgForMapUsingPOST(accountTime: string, type: string, options?: any) {
        return CreditQueryControllerApiFp(this.configuration).getAllMsgForMapUsingPOST(accountTime, type, options)(this.fetch, this.basePath);
    }

    /**
     * 往期账单汇总
     * @summary 往期账单汇总
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CreditQueryControllerApi
     */
    public pastCreditCardBillGatherUsingPOST(options?: any) {
        return CreditQueryControllerApiFp(this.configuration).pastCreditCardBillGatherUsingPOST(options)(this.fetch, this.basePath);
    }

}