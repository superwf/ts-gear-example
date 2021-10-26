import { defs as petV2Defs, petV2 } from './petV2';

import { defs as petV3Defs, petV3 } from './petV3';

(window as any).defs = {
  petV2: petV2Defs,
  petV3: petV3Defs,
};
(window as any).API = {
  petV2,
  petV3,
};
