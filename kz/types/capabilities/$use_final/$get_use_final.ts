import type { $UseFinal } from './$use_final.ts';

/**
 * Retrieves the finalization setting from a capability settings object that supports the {@linkcode $UseFinal} capability.
 *
 * @template $Settings - The capability settings object to extract the finalization setting from.
 * @template Default - The default type to return if the finalization setting is not present in the settings.
 * @returns The finalization setting if present, otherwise the specified default type.
 */
export type $GetUseFinal<$Settings, Default extends boolean = false> =
  $Settings extends $UseFinal<infer AsFinal> ? AsFinal : Default;
