import type { $UseFinalKeyString } from './$constants.ts';

/**
 * A capability consumer supporting finalization of boolean values.
 *
 * @template AsFinal - A boolean indicating whether finalization of boolean values is enabled.
 */
export type $UseFinal<AsFinal extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseFinal} capability.
   */
  [$UseFinalKeyString]: AsFinal;
};
