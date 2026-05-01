// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseExcludedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for exclusive or inclusive
 * behavior.
 *
 * Use this capability consumer to indicate that a type supports both exclusive
 * or inclusive behavior, or results in an exclusive or inclusive type, based
 * on the value of the capability setting.
 *
 * @see {@linkcode AsExcluded} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsIncluded} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsExcluded - The boolean settings for this capability consumer.
 */
export type UseExcluded<AsExcluded extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseExcluded` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseExcludedKeyString]: AsExcluded;
};
