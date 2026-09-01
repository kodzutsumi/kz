import type { $AsDeep } from './$as_deep.ts';
import type { $AsShallow } from './$as_shallow.ts';
import type { $UseDepthKey } from './$constants.ts';
import type { $DepthOf } from './$depth_of.ts';
import type { $UseDepth } from './$use_depth.ts';

type DepthGauge = [null, false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export type $DecrementDepth<$Settings> = $Settings extends $AsDeep
  ? $DepthOf<9> & Omit<$Settings, $UseDepthKey>
  : $Settings extends $AsShallow ? $Settings
  : $Settings extends $DepthOf<infer Depth> ?
      & $UseDepth<Depth extends 1 ? false : DepthGauge[Depth]>
      & Omit<$Settings, $UseDepthKey>
  : $AsShallow & Omit<$Settings, $UseDepthKey>;