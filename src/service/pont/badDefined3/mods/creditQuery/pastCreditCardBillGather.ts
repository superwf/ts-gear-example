/**
     * @desc 往期账单汇总
往期账单汇总
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.badDefined3.DataTransOutput();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl(
      '/api/core/asset/credit/query/pastCreditCardBillGather',
      params,
      'POST',
    ),
    {
      method: 'POST',
      body: bodyParams,
    },
  );
}
