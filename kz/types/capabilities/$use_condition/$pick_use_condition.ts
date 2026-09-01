import type { $PickUseElse } from '../$use_else/mod.ts';
import type { $PickUseThen } from '../$use_then/mod.ts';

/**
 * Retrieves the {@linkcode $Then} and {@linkcode $Else} types from a capability settings object that supports the
 * {@linkcode $UseThen} and {@linkcode $UseElse} capabilities, and returns them wrapped in a {@linkcode $Then} and
 * {@linkcode $Else} type respectively.
 *
 * @template $Settings - The capability settings object to extract the {@linkcode $Then} and {@linkcode $Else} types from.
 * @returns The result of {@linkcode $PickUseThen} and {@linkcode $PickUseElse} applied to the provided {@linkcode $Settings} type.
 *
 * @see {@linkcode $PickUseThen}
 * @see {@linkcode $PickUseElse}
 */
export type $PickUseCondition<$Settings> =
  & $PickUseThen<$Settings>
  & $PickUseElse<$Settings>;
