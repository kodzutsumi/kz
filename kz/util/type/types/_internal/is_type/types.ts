// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type {
  AsForward,
  AsLoose,
  AsSafe,
  UseNullOption,
  UseOfType,
  UseReversed,
  UseUnified,
  UseUnsafe,
} from '@kz/util/capability';

export type IsTypeCapSet =
  | UseUnified
  | UseUnsafe
  | UseReversed
  | UseOfType
  | UseNullOption;

export type IsTypeDefaults =
  & AsLoose
  & AsSafe
  & AsForward;
