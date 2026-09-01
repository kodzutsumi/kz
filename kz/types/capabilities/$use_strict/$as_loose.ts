import type { $UseStrict } from './$use_strict.ts';

/**
 * Specifies that strictness is disabled for the {@linkcode $UseStrict} capability.
 */
export type $AsLoose = $UseStrict<false>;
