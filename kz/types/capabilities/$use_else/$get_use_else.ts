import type { $Else } from './$else.ts';

/**
 * Retrieves the "else" type from a capability settings object that supports the {@linkcode $UseElse} capability.
 *
 * @template $Settings - The capability settings object to extract the "else" type from.
 * @template Default - The default type to return if the "else" type is not present in the settings.
 * @returns The "else" type if present, otherwise the specified default type.
 */
export type $GetUseElse<$Settings, Default extends unknown = unknown> =
  $Settings extends $Else<infer ElseType> ? ElseType : Default;
