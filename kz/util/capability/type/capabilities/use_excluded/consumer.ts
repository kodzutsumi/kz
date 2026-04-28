// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseExcludedKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for type exclusion, or exclusive or inclusive behavior.
 *
 * Use this capability consumer to indicate that a type supports both excluded or included types, or results in an excluded or included type based on the value of the capability setting.
 *
 * @template AsExcluded - A boolean type parameter indicating whether the broker behavior is excluded (`true`) or included (`false`).
 *
 * @see {@linkcode AsExcluded} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsIncluded} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseExcluded<AsExcluded extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseExcluded} capability, with a boolean value indicating whether the broker behavior is excluded (`true`) or included (`false`).
   */
  [UseExcludedKeyString]: AsExcluded;
};
