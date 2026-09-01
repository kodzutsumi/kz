import type { $UseUnifiedKeyString } from './$constants.ts';

/**
 * A capability consumer supporting the definition of unified mode.
 *
 * @template AsUnified - A boolean indicating whether unified mode is enabled.
 */
export type $UseUnified<AsUnified extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseUnified} capability.
   */
  [$UseUnifiedKeyString]: AsUnified;
};
