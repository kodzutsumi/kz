import type { $UseReversed } from './$use_reversed.ts';

/**
 * Retrieves the reversed order setting from a capability settings object that supports the {@linkcode $UseReversed}
 * capability, and returns it wrapped in a {@linkcode $UseReversed} type.
 *
 * @template $Settings - The capability settings object to extract the reversed order setting from.
 * @template Default - The default type to return if the reversed order setting is not present in the settings.
 * @returns A {@linkcode $UseReversed} type containing the reversed order setting if present, otherwise a {@linkcode $UseReversed} type containing the specified default type.
 */
export type $PickUseReversed<$Settings, Default extends boolean = false> =
  $Settings extends $UseReversed<infer AsReversed> ? $UseReversed<AsReversed>
    : $UseReversed<Default>;
