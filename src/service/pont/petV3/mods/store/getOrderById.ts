/**
     * @desc Find purchase order by ID
For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of order that needs to be fetched */
  orderId: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/store/order/{orderId}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
