import type { $UseReversed } from './$use_reversed.ts';

/**
 * Retrieves the reversed order setting from a capability settings object that supports the {@linkcode $UseReversed} capability.
 *
 * @template $Settings - The capability settings object to extract the reversed order setting from.
 * @template Default - The default type to return if the reversed order setting is not present in the settings.
 * @returns The reversed order setting if present, otherwise the specified default type.
 */
export type $GetUseReversed<$Settings, Default extends boolean = false> =
  $Settings extends $UseReversed<infer AsReversed> ? AsReversed : Default;
