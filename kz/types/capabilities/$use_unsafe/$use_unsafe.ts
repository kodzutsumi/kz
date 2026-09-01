import type { $UseUnsafeKeyString } from './$constants.ts';

/**
 * A capability consumer supporting the definition of boolean safety.
 *
 * @template AsUnsafe - A boolean indicating whether unsafe mode is enabled.
 */
export type $UseUnsafe<AsUnsafe extends boolean = boolean> = {
  /**
   * The capability setting key for the {@linkcode $UseUnsafe} capability.
   */
  [$UseUnsafeKeyString]: AsUnsafe;
};
