import type { $UseDepth } from './$use_depth.ts';

/**
 * Retrieves the depth recursion setting from a capability settings object that supports the {@linkcode $UseDepth}
 * capability, and returns it wrapped in a {@linkcode $UseDepth} type.
 *
 * @template $Settings - The capability settings object to extract the depth recursion setting from.
 * @template Default - The default type to return if the depth recursion setting is not present in the settings.
 * @returns A {@linkcode $UseDepth} type containing the depth recursion setting if present, otherwise a {@linkcode $UseDepth} type containing the specified default type.
 */
export type $PickUseDepth<$Settings, Default extends boolean = false> =
  $Settings extends $UseDepth<infer AsDepth> ? $UseDepth<AsDepth>
    : $UseDepth<Default>;
