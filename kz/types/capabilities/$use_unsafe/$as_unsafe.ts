import type { $UseUnsafe } from './$use_unsafe.ts';

/**
 * Specifies that safety is disabled for the {@linkcode $UseUnsafe} capability.
 */
export type $AsUnsafe = $UseUnsafe<true>;
