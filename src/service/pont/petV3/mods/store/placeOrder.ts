/**
     * @desc Place an order for a pet
Place a new order in the store
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/store/order', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}
