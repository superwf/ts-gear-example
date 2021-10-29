class ABCOutputParameters {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class CommonRequestTokenParameters {
  /** bizParamVo */
  bizParamVo = new OutputParametersVo();
}

class DataTransOutput {
  /** 返回数据 */
  data = new OutputParametersVo();

  /** 错误码。
100000 成功
200000 入参不合法
400000 权限不足
500000 服务失败 */
  transCode = undefined;

  /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
  transMessage = '';

  /** 信息详情” */
  transMessageDetail = '';
}

class OutputParametersVo {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class QueryParameters {
  /** data */
  data = undefined;

  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class Result {
  /** description */
  description = '';

  /** result */
  result = [];

  /** returnCode */
  returnCode = undefined;
}

class ResultListMap {
  /** description */
  description = '';
}

class VoMixedWithBlanksInChinese {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

export const badDefined3 = {
  ABCOutputParameters,
  CommonRequestTokenParameters,
  DataTransOutput,
  OutputParametersVo,
  QueryParameters,
  Result,
  ResultListMap,
  VoMixedWithBlanksInChinese,
};
