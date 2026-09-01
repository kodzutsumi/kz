import type { $Else } from './$else.ts';

/**
 * Retrieves the "else" type from a capability settings object that supports the {@linkcode $UseElse} capability, and
 * returns it wrapped in a {@linkcode $Else} type.
 *
 * @template $Settings - The capability settings object to extract the "else" type from.
 * @template Default - The default type to return if the "else" type is not present in the settings.
 * @returns A {@linkcode $Else} type containing the "else" type if present, otherwise a {@linkcode $Else} type containing the specified default type.
 */
export type $PickUseElse<$Settings, Default extends unknown = unknown> =
  $Settings extends $Else<infer ElseType> ? $Else<ElseType> : $Else<Default>;
