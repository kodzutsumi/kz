import type { $Else } from '../$use_else/mod.ts';
import type { $Then } from '../$use_then/mod.ts';

/**
 * Specifies a "then" and "else" type for the {@linkcode $UseCondition} capability.
 *
 * @template ThenType - The type of the "then" value for a condition.
 * @template ElseType - The type of the "else" value for a condition.
 */
export type $ConditionOf<
  ThenType extends unknown = unknown,
  ElseType extends unknown = unknown,
> = $Then<ThenType> & $Else<ElseType>;
