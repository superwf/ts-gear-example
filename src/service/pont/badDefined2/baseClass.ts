class BodyBuilder {}

class PageVO {
  /** 数据列表 */
  entities = [];

  /** 总条数 */
  entityCount = undefined;

  /** 开始序号 */
  firstEntityIndex = undefined;

  /** 结束序号 */
  lastEntityIndex = undefined;

  /** 总页数 */
  pageCount = undefined;

  /** 页码 */
  pageNo = undefined;

  /** 每页条数 */
  pageSize = undefined;
}

class ReplyVO {
  /** 响应代码【0正确,非0错误】 */
  code = '';

  /** 返回数据 */
  data = new PageVO();

  /** 结果描述 */
  message = '';
}

export const badDefined2 = {
  BodyBuilder,
  PageVO,
  ReplyVO,
};
