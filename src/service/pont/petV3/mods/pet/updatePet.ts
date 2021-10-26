/**
     * @desc Update an existing pet
Update an existing pet by Id
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet', params, 'PUT'), {
    method: 'PUT',
    body: null,
  });
}
