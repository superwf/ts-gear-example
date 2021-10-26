/**
 * @desc uploads an image
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ID of pet to update */
  petId: any;
  /** Additional Metadata */
  additionalMetadata?: any;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/pet/{petId}/uploadImage', params, 'POST'),
    {
      method: 'POST',
      body: null,
    },
  );
}
