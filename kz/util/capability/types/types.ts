// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  UseAsync,
  UseDefault,
  UseDepth,
  UseElse,
  UseExcluded,
  UseForType,
  UseInverted,
  UseNullOption,
  UseOfType,
  UseOptional,
  UseReadonly,
  UseRecord,
  UseReversed,
  UseSetter,
  UseStream,
  UseStrict,
  UseThen,
  UseUnified,
  UseUnsafe,
  UseVote,
} from './capabilities/mod.ts';

/**
 * The base capability set type, which is a union of all the base capability
 * types.
 *
 * @see {@linkcode FullBaseCapSet} for the full intersection of all capabilities, which represents a type that __requires__ all capabilities.
 */
export type BaseCapSet =
  | UseAsync
  | UseDefault
  | UseDepth
  | UseElse
  | UseExcluded
  | UseForType
  | UseInverted
  | UseNullOption
  | UseOfType
  | UseOptional
  | UseReadonly
  | UseRecord
  | UseReversed
  | UseSetter
  | UseStream
  | UseStrict
  | UseThen
  | UseUnified
  | UseUnsafe
  | UseVote;
