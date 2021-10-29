import { defs as petV2Defs, petV2 } from './petV2';

import { defs as petV3Defs, petV3 } from './petV3';

import { defs as badDefined1Defs, badDefined1 } from './badDefined1';

import { defs as badDefined2Defs, badDefined2 } from './badDefined2';

(window as any).defs = {
  petV2: petV2Defs,
  petV3: petV3Defs,
  badDefined1: badDefined1Defs,
  badDefined2: badDefined2Defs,
};
(window as any).API = {
  petV2,
  petV3,
  badDefined1,
  badDefined2,
};
