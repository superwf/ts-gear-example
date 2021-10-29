/**
 * @desc 站址经营-汇总首页
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** accountTime */
  accountTime: string;
  /** type */
  type: string;
}

export const init = new defs.badDefined3.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/zzjy/all-msg/getAllMsgForMap', params, 'POST'),
    {
      method: 'POST',
      body: null,
    },
  );
}
