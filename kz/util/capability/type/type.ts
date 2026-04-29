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

export type BaseCapConsumerSet =
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

export type FullBaseCapConsumerSet = ToIntersect<BaseCapConsumerSet>;

export type BaseCapConsumerSetKeys = keyof BaseCapConsumerSet;

type ToIntersect<U> = (U extends unknown ? (x: U) => void : never) extends
  ((x: infer I) => void) ? I : never;
