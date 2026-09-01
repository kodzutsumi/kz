import type { $UseElseKeyString } from './$constants.ts';

/**
 * A capability consumer supporting the definition of a "else" type for a condition.
 *
 * @template ElseType - The type of the "else" value for a condition.
 */
export type $UseElse<ElseType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseElse} capability.
   */
  [$UseElseKeyString]: ElseType;
};
