/**
     * @desc Delete purchase order by ID
For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/store/order/{orderId}', params, 'DELETE'),
    {
      method: 'DELETE',
      body: null,
    },
  );
}
