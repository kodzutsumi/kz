import type { $UseFinal } from './$use_final.ts';

/**
 * Retrieves the finalization setting from a capability settings object that supports the {@linkcode $UseFinal}
 * capability, and returns it wrapped in a {@linkcode $UseFinal} type.
 *
 * @template $Settings - The capability settings object to extract the finalization setting from.
 * @template Default - The default type to return if the finalization setting is not present in the settings.
 * @returns A {@linkcode $UseFinal} type containing the finalization setting if present, otherwise a {@linkcode $UseFinal} type containing the specified default type.
 */
export type $PickUseFinal<$Settings, Default extends boolean = false> =
  $Settings extends $UseFinal<infer AsFinal> ? $UseFinal<AsFinal>
    : $UseFinal<Default>;
