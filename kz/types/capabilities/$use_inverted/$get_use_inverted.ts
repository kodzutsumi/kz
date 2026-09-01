import type { $UseInverted } from './$use_inverted.ts';

/**
 * Retrieves the inversion setting from a capability settings object that supports the {@linkcode $UseInverted} capability.
 *
 * @template $Settings - The capability settings object to extract the inversion setting from.
 * @template Default - The default type to return if the inversion setting is not present in the settings.
 * @returns The inversion setting if present, otherwise the specified default type.
 */
export type $GetUseInverted<$Settings, Default extends boolean = false> =
  $Settings extends $UseInverted<infer AsInverted> ? AsInverted : Default;
