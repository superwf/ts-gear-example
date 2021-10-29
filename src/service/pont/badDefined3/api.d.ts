type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace badDefined3 {
    export class ABCOutputParameters {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class CommonRequestTokenParameters<T0 = any> {
      /** bizParamVo */
      bizParamVo?: T0;
    }

    export class DataTransOutput<T0 = any> {
      /** 返回数据 */
      data?: T0;

      /** 错误码。
100000 成功
200000 入参不合法
400000 权限不足
500000 服务失败 */
      transCode: number;

      /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
      transMessage: string;

      /** 信息详情” */
      transMessageDetail: string;
    }

    export class OutputParametersVo {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class QueryParameters {
      /** data */
      data?: ObjectMap<any, defs.badDefined3.DataTransOutput>;

      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class Result<T0 = any> {
      /** description */
      description?: string;

      /** result */
      result?: Array<ObjectMap>;

      /** returnCode */
      returnCode?: number;
    }

    export class ResultListMap {
      /** description */
      description?: string;
    }

    export class VoMixedWithBlanksInChinese {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }
  }
}

declare namespace API {
  export namespace badDefined3 {
    /**
     * Credit Query Controller
     */
    export namespace creditQuery {
      /**
        * 往期账单汇总
往期账单汇总
        * /api/core/asset/credit/query/pastCreditCardBillGather
        */
      export namespace pastCreditCardBillGather {
        export class Params {}

        export type Response = defs.badDefined3.DataTransOutput;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: any,
        ): Promise<defs.badDefined3.DataTransOutput>;
      }

      /**
       * 站址经营-汇总首页
       * /zzjy/all-msg/getAllMsgForMap
       */
      export namespace getAllMsgForMap {
        export class Params {
          /** accountTime */
          accountTime: string;
          /** type */
          type: string;
        }

        export type Response = defs.badDefined3.Result<Array<ObjectMap>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.badDefined3.Result<Array<ObjectMap>>>;
      }
    }
  }
}
