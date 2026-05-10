// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsCondition,
  UseCondition,
  UseInverted,
  UseUnsafe,
} from '@kz/util/capability';

export type LogicCapSet =
  | UseCondition
  | UseInverted
  | UseUnsafe;

export type LogicDefaults = AsCondition;
