import type {
  $UseInverted,
  $UseNullSetting,
  $UseReversed,
  $UseUnified,
  $UseUnsafe,
} from '@kz/util/capability';

/**
 * Defines the set of capabilities that can be applied to the type check,
 * including unified, unsafe, reversed, of-type, and null option capabilities.
 * 
 * @internal
 */
export type IsTypeCapabilities =
  | $UseUnified
  | $UseInverted
  | $UseUnsafe
  | $UseReversed
  | $UseNullSetting;