import type { $AsCondition, $UseCondition } from '../$use_condition/mod.ts';
import type { $GetUseElse } from '../$use_else/mod.ts';
import type { $GetUseThen } from '../$use_then/mod.ts';
import type { $AsDeep } from './$as_deep.ts';
import type { $DepthLevel } from './$depth_level.ts';
import type { $DepthOf } from './$depth_of.ts';

export type $IsDeep<
  $CapSet,
  $Settings extends $UseCondition = $AsCondition> =
  $CapSet extends $AsDeep ? $GetUseThen<$Settings, true>
  : $CapSet extends $DepthOf<infer Depth> ? Depth extends $DepthLevel ? $GetUseThen<$Settings, Depth>
  : $GetUseElse<$Settings, false>
  : $GetUseElse<$Settings, false>;