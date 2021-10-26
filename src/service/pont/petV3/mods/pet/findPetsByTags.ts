/**
     * @desc Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** Tags to filter by */
  tags?: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/pet/findByTags', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
