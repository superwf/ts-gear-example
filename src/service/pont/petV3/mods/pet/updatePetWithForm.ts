/**
 * @desc Updates a pet in the store with form data
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of pet that needs to be updated */
  petId: any;
  /** Name of pet that needs to be updated */
  name?: any;
  /** Status of pet that needs to be updated */
  status?: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet/{petId}', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}
