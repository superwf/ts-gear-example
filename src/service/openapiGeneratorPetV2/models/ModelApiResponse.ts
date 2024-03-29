/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.5
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelApiResponse
 */
export interface ModelApiResponse {
    /**
     * 
     * @type {number}
     * @memberof ModelApiResponse
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelApiResponse
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelApiResponse
     */
    message?: string;
}

export function ModelApiResponseFromJSON(json: any): ModelApiResponse {
    return ModelApiResponseFromJSONTyped(json, false);
}

export function ModelApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelApiResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ModelApiResponseToJSON(value?: ModelApiResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'type': value.type,
        'message': value.message,
    };
}

