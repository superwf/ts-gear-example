/**
     * @desc Add a new pet to the store
Add a new pet to the store
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}
