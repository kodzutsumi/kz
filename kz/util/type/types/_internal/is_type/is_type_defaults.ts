import type { $AsForward, $AsInitial, $AsLoose, $AsSafe } from '@kz/util/capability';

/**
 * Defines the default set of capabilities for the type check, which includes
 * loose, safe, and forward capabilities.
 * 
 * @internal
 */
export type IsTypeDefaults =
  & $AsInitial
  & $AsLoose
  & $AsSafe
  & $AsForward;