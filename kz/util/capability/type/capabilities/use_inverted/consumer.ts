import type { UseInvertedKeyString } from './constant.ts';

/**
 * A capability flag consumer indicating support for inversion behavior, or inverting or retaining initial behavior.
 *
 * Use this capability consumer to indicate that a type supports both inverting or retaining initial types, or results in an inverted or retained type based on the value of the capability setting.
 * 
 * ## Difference between `UseInverted` and {@linkcode UseReversed}
 * `UseInverted` is for behavior or type inversion, while {@linkcode UseReversed} is for data flow and comparison direction.
 * `UseInverted` is for behavioral capabilities, while {@linkcode UseReversed} is for structural capabilities.
 * `UseInverted` is for logic transformations (flip a bit or boolean), while {@linkcode UseReversed} is for type transformations (swap operands of comparison).
 *
 * @template AsInverted - A boolean type parameter indicating whether the broker behavior is inverted (`true`) or retained (`false`).
 *
 * @see {@linkcode AsInverted} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode AsInitial} for the `false` (implied default) broker behavior of this capability consumer.
 */
export type UseInverted<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode UseInverted} capability, with a boolean value indicating whether the broker behavior is inverted (`true`) or retained (`false`).
   */
  [UseInvertedKeyString]: AsInverted;
};
