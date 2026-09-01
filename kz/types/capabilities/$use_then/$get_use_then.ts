import type { $Then } from './$then.ts';

/**
 * Retrieves the "then" type from a capability settings object that supports the {@linkcode $UseThen} capability.
 *
 * @template $Settings - The capability settings object to extract the "then" type from.
 * @template Default - The default type to return if the "then" type is not present in the settings.
 * @returns The "then" type if present, otherwise the specified default type.
 */
export type $GetUseThen<$Settings, Default extends unknown = unknown> =
  $Settings extends $Then<infer ThenType> ? ThenType : Default;
