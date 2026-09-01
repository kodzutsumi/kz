import type { $UseUnsafe } from './$use_unsafe.ts';

/**
 * Retrieves the safety setting from a capability settings object that supports the {@linkcode $UseUnsafe} capability.
 *
 * @template $Settings - The capability settings object to extract the safety setting from.
 * @template Default - The default type to return if the safety setting is not present in the settings.
 * @returns The safety setting if present, otherwise the specified default type.
 */
export type $GetUseUnsafe<$Settings, Default extends boolean = false> =
  $Settings extends $UseUnsafe<infer AsUnsafe> ? AsUnsafe : Default;
