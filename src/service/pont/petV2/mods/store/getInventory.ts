/**
     * @desc Returns pet inventories by status
Returns a map of status codes to quantities
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/store/inventory', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
