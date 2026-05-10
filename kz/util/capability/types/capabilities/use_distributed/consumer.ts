// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseDistributedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for distributive behavior.
 *
 * Use this capability consumer to indicate that a type supports both
 * distributive behavior, or results in a distributed type, based on the value
 * of the capability setting.
 *
 * @see {@linkcode AsDistributed} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsUnion} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsDistributed - The boolean setting for this capability consumer.
 */
export type UseDistributed<AsDistributed extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseDistributed` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseDistributedKeyString]: AsDistributed;
};
