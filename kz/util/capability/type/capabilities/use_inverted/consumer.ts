// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseInvertedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for inverted or initial behavior.
 *
 * Use this capability consumer to indicate that a type supports both inverted
 * or initial behavior, or results in an inverted or initial type, based on the
 * value of the capability setting.
 *
 * @see {@linkcode AsInverted} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsInitial} for the `false` (implied default) broker behavior of this capability consumer.
 * 
 * @template AsInverted - The boolean setting for this capability consumer.
 */
export type UseInverted<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseInverted` capability.
   * 
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseInvertedKeyString]: AsInverted;
};
