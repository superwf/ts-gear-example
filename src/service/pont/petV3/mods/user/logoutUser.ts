/**
 * @desc Logs out current logged in user session
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user/logout', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
