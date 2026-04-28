// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseUnsafeKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for type safety, or unsafe or safe behavior.
 *
 * Use this capability consumer to indicate that a type supports both unsafe or safe types, or results in an unsafe or safe type based on the value of the capability setting.
 *
 * @template AsUnsafe - A boolean type parameter indicating whether the broker behavior is unsafe (`true`) or safe (`false`).
 *
 * @see {@linkcode AsUnsafe} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsSafe} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseUnsafe<AsUnsafe extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseUnsafe} capability, with a boolean value indicating whether the broker behavior is unsafe (`true`) or safe (`false`).
   */
  [UseUnsafeKeyString]: AsUnsafe;
};
