// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type { UseReadonlyKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for readonly or writable behavior.
 *
 * Use this capability consumer to indicate that a type supports both readonly
 * or writable behavior, or results in a readonly or writable type, based on
 * the value of the capability setting.
 *
 * @see {@linkcode AsReadonly} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsWritable} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsReadonly - The boolean setting for this capability consumer.
 */
export type UseReadonly<AsReadonly extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseReadonly` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseReadonlyKeyString]: AsReadonly;
};
