import type { $UseDepth } from './$use_depth.ts';

/**
 * Retrieves the depth recursion setting from a capability settings object that supports the {@linkcode $UseDepth} capability.
 *
 * @template $Settings - The capability settings object to extract the depth recursion setting from.
 * @template Default - The default type to return if the depth recursion setting is not present in the settings.
 * @returns The depth recursion setting if present, otherwise the specified default type.
 */
export type $GetUseDepth<$Settings, Default extends boolean = false> =
  $Settings extends $UseDepth<infer AsDepth> ? AsDepth : Default;
