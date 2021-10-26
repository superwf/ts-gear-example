/**
 * @desc Logs user into the system
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** The user name for login */
  username?: any;
  /** The password for login in clear text */
  password?: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/login', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
