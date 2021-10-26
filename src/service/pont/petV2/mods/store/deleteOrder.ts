/**
     * @desc Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: number;
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
