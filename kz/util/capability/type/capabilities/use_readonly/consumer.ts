import type { UseReadonlyKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for readonly, or readonly or writable behavior.
 *
 * Use this capability consumer to indicate that a type supports both readonly or writable types, or results in a readonly or writable type based on the value of the capability setting.
 *
 * @template AsReadonly - A boolean type parameter indicating whether the broker behavior is readonly (`true`) or writable (`false`).
 *
 * @see {@linkcode AsReadonly} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsWritable} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseReadonly<AsReadonly extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseReadonly} capability, with a boolean value indicating whether the broker behavior is readonly (`true`) or writable (`false`).
   */
  [UseReadonlyKeyString]: AsReadonly;
};
