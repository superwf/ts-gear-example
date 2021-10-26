/**
     * @desc Find pet by ID
Returns a single pet
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of pet to return */
  petId: number;
}

export const init = new defs.petV2.Pet();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet/{petId}', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
