/**
 * @desc Deletes a pet
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** Pet id to delete */
  petId: number;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet/{petId}', params, 'DELETE'), {
    method: 'DELETE',
    body: null,
  });
}
