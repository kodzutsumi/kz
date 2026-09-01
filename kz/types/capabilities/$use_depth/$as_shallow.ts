import type { $UseDepth } from './$use_depth.ts';

/**
 * Specifies that depth recursion is disabled for the {@linkcode $UseDepth} capability.
 */
export type $AsShallow = $UseDepth<false>;
