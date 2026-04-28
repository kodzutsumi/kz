// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseReversedKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for reversion, or reversed or forward behavior.
 *
 * Use this capability consumer to indicate that a type supports both reversed or forward types, or results in a reversed or forward type based on the value of the capability setting.
 *
 * ## Difference between `UseReversed` and {@linkcode UseInverted}
 * `UseReversed` is for data flow and comparison direction, while {@linkcode UseInverted} is for behavior or type inversion.
 * `UseReversed` is for structural capabilities, while {@linkcode UseInverted} is for behavioral capabilities.
 * `UseReversed` is for type transformations (swap operands of comparison), while {@linkcode UseInverted} is for logic transformations (flip a bit or boolean).
 *
 * @template AsReversed - A boolean type parameter indicating whether the broker behavior is reversed (`true`) or forward (`false`).
 *
 * @see {@linkcode AsReversed} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsForward} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseReversed<AsReversed extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseReversed} capability, with a boolean value indicating whether the broker behavior is reversed (`true`) or forward (`false`).
   */
  [UseReversedKeyString]: AsReversed;
};
