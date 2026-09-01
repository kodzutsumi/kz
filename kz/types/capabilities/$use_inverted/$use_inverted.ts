import type { $UseInvertedKeyString } from './$constants.ts';

/**
 * A capability consumer supporting inversion.
 *
 * @template AsInverted - A boolean indicating whether inversion is enabled.
 */
export type $UseInverted<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseInverted} capability.
   */
  [$UseInvertedKeyString]: AsInverted;
};
