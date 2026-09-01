import type { $UseInverted } from './$use_inverted.ts';

/**
 * Retrieves the inversion setting from a capability settings object that supports the {@linkcode $UseInverted}
 * capability, and returns it wrapped in a {@linkcode $UseInverted} type.
 *
 * @template $Settings - The capability settings object to extract the inversion setting from.
 * @template Default - The default type to return if the inversion setting is not present in the settings.
 * @returns A {@linkcode $UseInverted} type containing the inversion setting if present, otherwise a {@linkcode $UseInverted} type containing the specified default type.
 */
export type $PickUseInverted<$Settings, Default extends boolean = false> =
  $Settings extends $UseInverted<infer AsInverted> ? $UseInverted<AsInverted>
    : $UseInverted<Default>;
