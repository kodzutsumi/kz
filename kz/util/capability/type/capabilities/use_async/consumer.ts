import type { UseAsyncKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for concurrency, or asynchronous or synchronous behavior.
 *
 * Use this capability consumer to indicate that a type supports both asynchronous or synchronous types, or results in an asynchronous or synchronous type based on the value of the capability setting.
 *
 * @template AsAsync - A boolean type parameter indicating whether the broker behavior is asynchronous (`true`) or synchronous (`false`).
 *
 * @see {@linkcode AsAsync} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsSync} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseAsync<AsAsync extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseAsync} capability, with a boolean value indicating whether the broker behavior is asynchronous (`true`) or synchronous (`false`).
   */
  [UseAsyncKeyString]: AsAsync;
};
