import type { $UseElse } from './$use_else.ts';

/**
 * Specifies a "else" type for the {@linkcode $UseElse} capability.
 *
 * @template ElseType - The type of the "else" value for a condition.
 */
export type $Else<ElseType extends unknown = unknown> = $UseElse<ElseType>;
