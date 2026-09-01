import type { $UseUnified } from './$use_unified.ts';

/**
 * Retrieves the unified mode setting from a capability settings object that supports the {@linkcode $UseUnified} capability.

 * @template $Settings - The capability settings object to extract the unified mode setting from.
 * @template Default - The default type to return if the unified mode setting is not present in the settings.
 * @returns The unified mode setting if present, otherwise the specified default type.
 */
export type $GetUseUnified<$Settings, Default extends boolean = false> =
  $Settings extends $UseUnified<infer AsUnified> ? AsUnified : Default;
