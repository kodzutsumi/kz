import type { $UseReversedKeyString } from './$constants.ts';

/**
 * A capability consumer supporting reversed order.
 *
 * @template AsInverted - A boolean indicating whether reversed order is enabled.
 */
export type $UseReversed<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseReversed} capability.
   */
  [$UseReversedKeyString]: AsInverted;
};
