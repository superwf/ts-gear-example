/**
 * @desc Place an order for a pet
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.petV2.Order();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/store/order', params, 'POST'), {
    method: 'POST',
    body: bodyParams,
  });
}
