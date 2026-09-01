import type { $UseThen } from './$use_then.ts';

/**
 * Specifies a "then" type for the {@linkcode $UseThen} capability.
 *
 * @template ThenType - The type of the "then" value for a condition.
 */
export type $Then<ThenType extends unknown = unknown> = $UseThen<ThenType>;
