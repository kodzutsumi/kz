// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsForward,
  AsInitial,
  AsLoose,
  AsSafe,
  UseInverted,
  UseNullOption,
  UseReversed,
  UseUnified,
  UseUnsafe,
} from '@kz/util/capability';

/**
 * Defines the set of capabilities that can be applied to the type check,
 * including unified, unsafe, reversed, of-type, and null option capabilities.
 * 
 * @internal
 */
export type IsTypeCapSet =
  | UseUnified
  | UseInverted
  | UseUnsafe
  | UseReversed
  | UseNullOption;

/**
 * Defines the default set of capabilities for the type check, which includes
 * loose, safe, and forward capabilities.
 * 
 * @internal
 */
export type IsTypeDefaults =
  & AsInitial
  & AsLoose
  & AsSafe
  & AsForward;