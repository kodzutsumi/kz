// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { UseAsyncKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for asynchronous or synchronous
 * behavior.
 *
 * Use this capability consumer to indicate that a type supports both
 * asynchronous or synchronous behavior, or results in an asynchronous or
 * synchronous type, based on the value of the capability setting.
 *
 * @see {@linkcode AsAsync} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsSync} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsAsync - The boolean setting for this capability consumer.
 */
export type UseAsync<AsAsync extends boolean = boolean> = {
  /**
   * The capability setting key for the `UseAsync` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [UseAsyncKeyString]: AsAsync;
};
