/**
 * @desc Logs user into the system
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

export const init = '';

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/login', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
