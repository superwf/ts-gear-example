/**
     * @desc Updated user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** name that need to be updated */
  username: string;
}

export const init = undefined;

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/user/{username}', params, 'PUT'), {
    method: 'PUT',
    body: bodyParams,
  });
}
