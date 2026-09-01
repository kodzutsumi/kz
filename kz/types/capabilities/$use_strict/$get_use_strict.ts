import type { $UseStrict } from './$use_strict.ts';

/**
 * Retrieves the strictness setting from a capability settings object that supports the {@linkcode $UseStrict} capability.
 *
 * @template $Settings - The capability settings object to extract the strictness setting from.
 * @template Default - The default type to return if the strictness setting is not present in the settings.
 * @returns The strictness setting if present, otherwise the specified default type.
 */
export type $GetUseStrict<$Settings, Default extends boolean = false> =
  $Settings extends $UseStrict<infer AsStrict> ? AsStrict : Default;
