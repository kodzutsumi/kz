import type { $UseThenKeyString } from './$constants.ts';

/**
 * A capability consumer supporting the definition of a "then" type for a condition.
 *
 * @template ThenType - The type of the "then" value for a condition.
 */
export type $UseThen<ThenType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseThen} capability.
   */
  [$UseThenKeyString]: ThenType;
};
