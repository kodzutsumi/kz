import type { $UseStrictKeyString } from './$constants.ts';

/**
 * A capability consumer supporting the definition of a strictness.
 *
 * @template AsStrict - A boolean indicating whether strictness is enabled.
 */
export type $UseStrict<AsStrict extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseStrict} capability.
   */
  [$UseStrictKeyString]: AsStrict;
};
