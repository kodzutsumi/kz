import type { $UseDepthKeyString } from './$constants.ts';
import type { $Depth } from './$depth.ts';

/**
 * A capability consumer supporting depth recursion.

 * @template Depth - A boolean indicating whether depth recursion is enabled.
 */
export type $UseDepth<Depth extends $Depth = $Depth> = {
  /**
   * The capability setting key for the {@linkcode $UseDepth} capability.
   */
  [$UseDepthKeyString]: Depth;
};
