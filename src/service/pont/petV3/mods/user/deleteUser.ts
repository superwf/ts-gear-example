/**
     * @desc Delete user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** The name that needs to be deleted */
  username: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/{username}', params, 'DELETE'), {
    method: 'DELETE',
    body: null,
  });
}
