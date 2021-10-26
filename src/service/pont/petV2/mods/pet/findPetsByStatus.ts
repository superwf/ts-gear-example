/**
     * @desc Finds Pets by status
Multiple status values can be provided with comma separated strings
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** Status values that need to be considered for filter */
  status: Array<string>;
}

export const init = [];

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet/findByStatus', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
