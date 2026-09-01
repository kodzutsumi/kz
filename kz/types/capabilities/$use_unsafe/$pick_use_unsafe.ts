import type { $UseUnsafe } from './$use_unsafe.ts';

/**
 * Retrieves the safety setting from a capability settings object that supports the {@linkcode $UseUnsafe}
 * capability, and returns it wrapped in a {@linkcode $UseUnsafe} type.
 *
 * @template $Settings - The capability settings object to extract the safety setting from.
 * @template Default - The default type to return if the safety setting is not present in the settings.
 * @returns A {@linkcode $UseUnsafe} type containing the safety setting if present, otherwise a {@linkcode $UseUnsafe} type containing the specified default type.
 */
export type $PickUseUnsafe<$Settings, Default extends boolean = false> =
  $Settings extends $UseUnsafe<infer AsUnsafe> ? $UseUnsafe<AsUnsafe>
    : $UseUnsafe<Default>;
