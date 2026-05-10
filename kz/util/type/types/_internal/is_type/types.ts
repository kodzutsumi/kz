// Copyright 2020 - present integereleven. All rights reserved. MIT license.


import type {
  AsForward,
  AsLoose,
  AsSafe,
  UseNullOption,
  UseOfType,
  UseReversed,
  UseStrict,
  UseUnsafe,
} from '@kz/util/capability';

export type IsTypeCapSet =
  | UseStrict
  | UseUnsafe
  | UseReversed
  | UseOfType
  | UseNullOption;

export type IsTypeDefaults =
  & AsLoose
  & AsSafe
  & AsForward;
