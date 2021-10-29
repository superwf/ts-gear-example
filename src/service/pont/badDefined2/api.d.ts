type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace badDefined2 {
    export class BodyBuilder {}

    export class PageVO<T0 = any> {
      /** 数据列表 */
      entities: Array<T0>;

      /** 总条数 */
      entityCount: number;

      /** 开始序号 */
      firstEntityIndex: number;

      /** 结束序号 */
      lastEntityIndex: number;

      /** 总页数 */
      pageCount: number;

      /** 页码 */
      pageNo: number;

      /** 每页条数 */
      pageSize: number;
    }

    export class ReplyVO<T0 = any> {
      /** 响应代码【0正确,非0错误】 */
      code: string;

      /** 返回数据 */
      data?: T0;

      /** 结果描述 */
      message: string;
    }
  }
}

declare namespace API {
  export namespace badDefined2 {}
}
