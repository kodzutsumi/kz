// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseOptionalKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for type requirements, or optional or required behavior.
 *
 * Use this capability consumer to indicate that a type supports both optional or required types, or results in an optional or required type based on the value of the capability setting.
 *
 * @template AsOptional - A boolean type parameter indicating whether the broker behavior is optional (`true`) or required (`false`).
 *
 * @see {@linkcode AsOptional} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsIncluded} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseOptional<AsOptional extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseOptional} capability, with a boolean value indicating whether the broker behavior is optional (`true`) or required (`false`).
   */
  [UseOptionalKeyString]: AsOptional;
};
