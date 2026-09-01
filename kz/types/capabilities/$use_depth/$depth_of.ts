import type { $DepthLevel } from './$depth_level.ts';
import type { $UseDepth } from './$use_depth.ts';

/**
 * Specifies the depth level for the {@linkcode $UseDepth} capability.
 * 
 * @template Depth - The depth level for the {@linkcode $UseDepth} capability.
 */
export type $DepthOf<Depth extends $DepthLevel> = $UseDepth<Depth>;
