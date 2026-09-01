import type { $UseUnsafe } from './$use_unsafe.ts';

/**
 * Specifies that safety is enabled for the {@linkcode $UseUnsafe} capability.
 */
export type $AsSafe = $UseUnsafe<false>;
