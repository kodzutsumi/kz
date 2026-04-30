// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseReversedKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for reversion, or reversed or forward behavior.
 *
 * Use this capability consumer to indicate that a type supports both reversed or forward types, or results in a reversed or forward type based on the value of the capability setting.
 *
 * @template AsReversed - A boolean type parameter indicating whether the broker behavior is reversed (`true`) or forward (`false`).
 *
 * @see {@linkcode AsReversed} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsForward} for the `false` (implied default) broker behavior of this capability consumer.
 */

/**
 * A capability consumer indicating support for reversed or forward behavior.
 *
 * Use this capability consumer to indicate that a type supports both reversed
 * or forward behavior, or results in a reversed or forward type, based on the
 * value of the capability setting.
 * 
 * ## Difference between `UseReversed` and {@linkcode UseInverted}
 * //TODO(@ebntly): Explain the difference between these two capabilities, and
 * //when to use each.
 * 
 * @see {@linkcode AsReversed} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsForward} for the `false` (implied default) broker behavior of this capability consumer.
 * 
 * @template AsReversed - The boolean setting for this capability consumer.
 */
export type UseReversed<AsReversed extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseReversed` capability.
   * 
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseReversedKeyString]: AsReversed;
};
