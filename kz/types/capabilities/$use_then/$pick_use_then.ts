import type { $Then } from './$then.ts';

/**
 * Retrieves the "then" type from a capability settings object that supports the {@linkcode $UseThen} capability, and
 * returns it wrapped in a {@linkcode $Then} type.
 *
 * @template $Settings - The capability settings object to extract the "then" type from.
 * @template Default - The default type to return if the "then" type is not present in the settings.
 * @returns A {@linkcode $Then} type containing the "then" type if present, otherwise a {@linkcode $Then} type containing the specified default type.
 */
export type $PickUseThen<$Settings, Default extends unknown = unknown> =
  $Settings extends $Then<infer ThenType> ? $Then<ThenType> : $Then<Default>;
