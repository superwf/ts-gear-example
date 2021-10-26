/**
 * @desc Get user by user name
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}

export const init = new defs.petV2.User();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/{username}', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
