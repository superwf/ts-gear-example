/**
 * @desc Creates list of users with given input array
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/user/createWithArray', params, 'POST'),
    {
      method: 'POST',
      body: bodyParams,
    },
  );
}
