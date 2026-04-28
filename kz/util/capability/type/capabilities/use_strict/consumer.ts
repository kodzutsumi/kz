// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseStrictKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for strictness, or strict or loose behavior.
 *
 * Use this capability consumer to indicate that a type supports both strict or loose types, or results in a strict or loose type based on the value of the capability setting.
 *
 * @template AsStrict - A boolean type parameter indicating whether the broker behavior is strict (`true`) or loose (`false`).
 *
 * @see {@linkcode AsStrict} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsLoose} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseStrict<AsStrict extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseStrict} capability, with a boolean value indicating whether the broker behavior is strict (`true`) or loose (`false`).
   */
  [UseStrictKeyString]: AsStrict;
};
