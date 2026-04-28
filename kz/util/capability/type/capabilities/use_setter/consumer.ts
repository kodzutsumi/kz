import type { UseSetterKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for accessor behavior, or setter or getter behavior.
 *
 * Use this capability consumer to indicate that a type supports both setter or getter types, or results in a setter or getter type based on the value of the capability setting.
 *
 * @template AsSetter - A boolean type parameter indicating whether the broker behavior is setter (`true`) or getter (`false`).
 *
 * @see {@linkcode AsSetter} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsGetter} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseSetter<AsSetter extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseSetter} capability, with a boolean value indicating whether the broker behavior is setter (`true`) or getter (`false`).
   */
  [UseSetterKeyString]: AsSetter;
};
