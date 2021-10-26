/**
     * @desc Create user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/user', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}
