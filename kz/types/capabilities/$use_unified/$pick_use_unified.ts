import type { $UseUnified } from './$use_unified.ts';

/**
 * Retrieves the unified mode setting from a capability settings object that supports the {@linkcode $UseUnified}
 * capability, and returns it wrapped in a {@linkcode $UseUnified} type.
 *
 * @template $Settings - The capability settings object to extract the unified mode setting from.
 * @template Default - The default type to return if the unified mode setting is not present in the settings.
 * @returns A {@linkcode $UseUnified} type containing the unified mode setting if present, otherwise a {@linkcode $UseUnified} type containing the specified default type.
 */
export type $PickUseUnified<$Settings, Default extends boolean = false> =
  $Settings extends $UseUnified<infer AsUnified> ? $UseUnified<AsUnified>
    : $UseUnified<Default>;
