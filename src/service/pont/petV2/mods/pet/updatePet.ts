/**
 * @desc Update an existing pet
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/pet', params, 'PUT'), {
    method: 'PUT',
    body: bodyParams,
  });
}
