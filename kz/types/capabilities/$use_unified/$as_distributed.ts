import type { $UseUnified } from './$use_unified.ts';

/**
 * Specifies that unified mode is disabled for the {@linkcode $UseUnified} capability.
 */
export type $AsDistributed = $UseUnified<false>;
