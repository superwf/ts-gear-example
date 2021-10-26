/**
     * @desc Update user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** name that need to be deleted */
  username: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/{username}', params, 'PUT'), {
    method: 'PUT',
    body: null,
  });
}
