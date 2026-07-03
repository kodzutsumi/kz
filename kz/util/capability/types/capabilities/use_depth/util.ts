// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { GetCapSetting } from '../../get_cap_setting.ts';
// import type { BaseCapSet } from '../../types.ts';

// import type { AsCondition, UseCondition } from '../use_condition/mod.ts';
// import type { UseElse } from '../use_else/mod.ts';
// import type { UseThen } from '../use_then/mod.ts';

// import type { AsDeep, AsLevel, AsShallow } from './broker.ts';
// import type {
//   UseDepthKey,
//   UseDepthLevel,
//   UseDepthLevelGauge,
// } from './constant.ts';
// import type { UseDepth } from './consumer.ts';

// /**
//  * A utility type that decrements the depth level of a {@linkcode UseDepth}
//  * capability within a capability set.
//  *
//  * @template CapSet - The capability set to decrement the depth level of.
//  */
// export type DecrementDepth<CapSet extends BaseCapSet> = CapSet extends
//   UseDepth<infer Depth> ? Depth extends UseDepthLevel ?
//       & UseDepth<Depth extends 1 ? false : UseDepthLevelGauge[Depth]>
//       & Omit<CapSet, UseDepthKey>
//   : Depth extends true ? AsLevel<9> & Omit<CapSet, UseDepthKey>
//   : AsShallow & Omit<CapSet, UseDepthKey>
//   : CapSet;

// /**
//  * A utility type that checks if a capability set has a {@linkcode UseDepth}
//  * capability with a depth level of `true` or greater than `1`.
//  *
//  * @template CapSet - The capability set to check for deep support.
//  * @template Settings - The capabilities to check for when determining the result.
//  */
// export type IsDeep<
//   CapSet extends BaseCapSet,
//   Settings extends UseCondition = AsCondition,
// > = CapSet extends AsDeep ? GetCapSetting<Settings, UseThen, true>
//   : CapSet extends AsLevel<infer Depth>
//     ? Depth extends UseDepthLevel ? GetCapSetting<Settings, UseThen, true>
//     : GetCapSetting<Settings, UseElse, false>
//   : GetCapSetting<Settings, UseElse, false>;
