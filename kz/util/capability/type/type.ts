// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  UseAsync,
  UseDefault,
  UseDepth,
  UseElse,
  UseExcluded,
  UseInverted,
  UseNullOption,
  UseOfType,
  UseOptional,
  UseReadonly,
  UseRecord,
  UseReversed,
  UseSetter,
  UseStrict,
  UseThen,
  UseUnsafe,
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
  | UseInverted
  | UseNullOption
  | UseOfType
  | UseOptional
  | UseReadonly
  | UseRecord
  | UseReversed
  | UseSetter
  | UseStrict
  | UseThen
  | UseUnsafe;

/**
 * The full intersection of all capabilities, which represents a type that
 * __requires__ all capabilities.
 *
 * @see {@linkcode BaseCapSet} for the base capability set type, which is a union of all the base capability types.
 */
export type FullBaseCapSet = ToIntersect<BaseCapSet>;

/**
 * The keys of the base capability set, which are the keys of the union of all
 * the base capability types.
 *
 * @see {@linkcode BaseCapSet} for the base capability set type, which is a union of all the base capability types.
 */
export type BaseCapSetKeys = keyof BaseCapSet;

type ToIntersect<U> = (U extends unknown ? (x: U) => void : never) extends
  ((x: infer I) => void) ? I : never;
