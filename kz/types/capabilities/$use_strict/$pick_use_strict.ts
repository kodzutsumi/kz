import type { $UseStrict } from './$use_strict.ts';

/**
 * Retrieves the strictness setting from a capability settings object that supports the {@linkcode $UseStrict}
 * capability, and returns it wrapped in a {@linkcode $UseStrict} type.
 *
 * @template $Settings - The capability settings object to extract the strictness setting from.
 * @template Default - The default type to return if the strictness setting is not present in the settings.
 * @returns A {@linkcode $UseStrict} type containing the strictness setting if present, otherwise a {@linkcode $UseStrict} type containing the specified default type.
 */
export type $PickUseStrict<$Settings, Default extends boolean = false> =
  $Settings extends $UseStrict<infer AsStrict> ? $UseStrict<AsStrict>
    : $UseStrict<Default>;
