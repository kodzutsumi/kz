import type { $UseElse } from './$use_else.ts';
import type { $UseInverted } from './$use_inverted.ts';
import type { $UseNullSetting } from './$use_null_setting.ts';
import type { $UseUnsafe } from './$use_unsafe.ts';
import type { $UseVote } from './$use_vote.ts';
import type { $UseThen } from './mod.ts';

/**
 * A union type representing all base capabilities.
 * 
 * This type is used to define the set of capabilities that are considered
 * "base" capabilities in the system.
 */
export type BaseCapabilities = 
  | $UseThen
  | $UseElse
  | $UseUnsafe
  | $UseVote
  | $UseInverted
  | $UseNullSetting;