import type { $ConditionOf } from './$condition_of.ts';

/**
 * Specifies the default "then" and "else" types for the {@linkcode $UseCondition} capability, which are `true` and
 * `false` respectively.
 *
 * @template ThenType - The type of the "then" value for a condition, defaulting to `true`.
 * @template ElseType - The type of the "else" value for a condition, defaulting to `false`.
 * @returns A {@linkcode $ConditionOf} type containing the specified "then" and "else" types.
 */
export type $AsCondition = $ConditionOf<true, false>;
